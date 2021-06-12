import MainButton from "components/Buttons/MainButton";
import Lock from "components/Icons/Lock";
import TextInput from "components/Inputs/TextInput";
import { useState } from "react";
import { colors } from "styles/theme";
import dynamic from "next/dynamic";

const SuccessModal = dynamic(() => import("components/Modals/SuccessModal"), {
  ssr: false,
});

const CreditCardInfo = ({ returnBeginning }) => {
  const [creditCardInfo, setCreditCardInfo] = useState({
    cvc: "",
    creditCard: "",
  });

  const [openModal, setOpenModal] = useState(false);

  const createAccount = (e) => {
    e.preventDefault();
    // TODO: Guardar usuario
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    returnBeginning();
  };

  return (
    <>
      <div className="container">
        <h1>Verifica tu perfil</h1>
        <span>
          Para poder revisar que se trata de una cuenta real, necesitamos la
          siguiente información
        </span>
        <form onSubmit={createAccount}>
          <div className="inputs">
            <TextInput
              placeholder="Introduce el número de la tarjeta"
              type="text"
              label="Número de tarjeta *"
              required
              value={creditCardInfo.creditCard}
              name="credit"
              onChange={(e) => {
                setCreditCardInfo({
                  ...creditCardInfo,
                  creditCard: e.target.value,
                });
              }}
            />
            <TextInput
              placeholder="Introduce el código secreto"
              type="text"
              required
              label="Código secreto *"
              value={creditCardInfo.cvc}
              name="cvc"
              onChange={(e) =>
                setCreditCardInfo({ ...creditCardInfo, cvc: e.target.value })
              }
            />
          </div>
          <MainButton type="submit">Crear cuenta</MainButton>
          <div className="secureInfo">
            <Lock />
            <span>Tu información es segura</span>
          </div>
        </form>
      </div>
      <SuccessModal
        contentLabel="Cuenta creada correctamente"
        closeModal={closeModal}
        modalIsOpen={openModal}
      />
      <style jsx>{`
        .container {
          margin-bottom: 20px;
        }
        .container > span {
          color: ${colors.lightText};
        }
        .secureInfo {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
          color: ${colors.lightText};
        }

        .inputs {
          margin-bottom: 30px;
        }
      `}</style>
    </>
  );
};

export default CreditCardInfo;

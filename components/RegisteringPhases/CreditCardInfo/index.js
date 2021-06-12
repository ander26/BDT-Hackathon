import MainButton from "components/Buttons/MainButton";
import Lock from "components/Icons/Lock";
import TextInput from "components/Inputs/TextInput";
import { useState } from "react";
import { colors } from "styles/theme";
import dynamic from "next/dynamic";
import { validateCreditCard, validateCVV } from "utils/creditCard";
import Correct from "components/Icons/Correct";
import Incorrect from "components/Icons/Incorrect";

const SuccessModal = dynamic(() => import("components/Modals/SuccessModal"), {
  ssr: false,
});

const ErrorModal = dynamic(() => import("components/Modals/ErrorModal"), {
  ssr: false,
});

const CreditCardInfo = ({ returnBeginning }) => {
  const [creditCardInfo, setCreditCardInfo] = useState({
    cvv: "",
    creditCard: "",
  });

  const [modalInfo, setModalInfo] = useState({
    open: false,
    title: "¡Ups, algo ha ido mal!",
    description: "",
  });

  const [openModal, setOpenModal] = useState(false);

  const [validations, setValidations] = useState();

  const createAccount = (e) => {
    e.preventDefault();

    if (!validations?.correctCreditCard) {
      setModalInfo({
        ...modalInfo,
        description:
          "Parece que no has introducido un número de tarjeta valido. Por favor, revísalo y vuelve a intentarlo de nuevo.",
        open: true,
      });
    } else if (!validations?.correctCVV) {
      setModalInfo({
        ...modalInfo,
        description:
          "Parece que no has introducido un número secreto valido. Por favor, revísalo y vuelve a intentarlo de nuevo.",
        open: true,
      });
    } else {
      // TODO: Guardar usuario
      setOpenModal(true);
    }
  };

  const closeModal = () => {
    setOpenModal(false);
    returnBeginning();
  };

  const validateNumber = () => {
    setValidations({
      ...validations,
      correctCreditCard: validateCreditCard(creditCardInfo.creditCard),
    });
  };

  const validateCVVNumber = () => {
    setValidations({
      ...validations,
      correctCVV: validateCVV(creditCardInfo.cvv),
    });
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
            <div className="relative">
              <TextInput
                placeholder="Introduce el número de la tarjeta"
                type="text"
                label="Número de tarjeta *"
                required
                value={creditCardInfo.creditCard}
                name="credit"
                onBlur={validateNumber}
                onChange={(e) => {
                  setCreditCardInfo({
                    ...creditCardInfo,
                    creditCard: e.target.value,
                  });
                }}
                style={{
                  border:
                    validations?.correctCreditCard !== undefined
                      ? validations?.correctCreditCard
                        ? `1px solid ${colors.icons}`
                        : `1px solid ${colors.incorrect}`
                      : ` 1px solid ${colors.lightText}`,
                }}
              />
              {validations?.correctCreditCard !== undefined ? (
                validations?.correctCreditCard ? (
                  <Correct
                    style={{ position: "absolute", top: "51px", right: "25px" }}
                  />
                ) : (
                  <Incorrect
                    width={20}
                    height={20}
                    style={{ position: "absolute", top: "51px", right: "25px" }}
                  />
                )
              ) : (
                <></>
              )}
            </div>
            <div className="relative">
              <TextInput
                placeholder="Introduce el código secreto"
                type="text"
                required
                label="Código secreto *"
                value={creditCardInfo.cvv}
                name="cvv"
                onBlur={validateCVVNumber}
                onChange={(e) =>
                  setCreditCardInfo({ ...creditCardInfo, cvv: e.target.value })
                }
                style={{
                  border:
                    validations?.correctCVV !== undefined
                      ? validations?.correctCVV
                        ? `1px solid ${colors.icons}`
                        : `1px solid ${colors.incorrect}`
                      : ` 1px solid ${colors.lightText}`,
                }}
              />
              {validations?.correctCVV !== undefined ? (
                validations?.correctCVV ? (
                  <Correct
                    style={{ position: "absolute", top: "51px", right: "25px" }}
                  />
                ) : (
                  <Incorrect
                    width={20}
                    height={20}
                    style={{ position: "absolute", top: "51px", right: "25px" }}
                  />
                )
              ) : (
                <></>
              )}
            </div>
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
      <ErrorModal
        contentLabel="Error"
        closeModal={() => setModalInfo({ ...modalInfo, open: false })}
        modalIsOpen={modalInfo.open}
        title={modalInfo.title}
        description={modalInfo.description}
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

        .relative {
          position: relative;
        }
      `}</style>
    </>
  );
};

export default CreditCardInfo;

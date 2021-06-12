import ModalButton from "components/Buttons/ModalButton";
import Modal from "react-modal";
import { CUSTOM_STYLES_MODAL } from "utils/constants";

Modal.setAppElement(document.body);

const SuccessModal = ({ contentLabel, closeModal, modalIsOpen }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        contentLabel={contentLabel}
        style={CUSTOM_STYLES_MODAL}
      >
        <div className="content">
          <h1>¡Todo guay!</h1>
          <p>Tu cuenta se ha creado correctamente</p>
          <div className="flex">
            <ModalButton onClick={closeModal} type="button" border="black">
              Cerrar
            </ModalButton>
            <ModalButton
              onClick={closeModal}
              type="button"
              border="black"
              fill="black"
              style={{ color: "white", marginLeft: "20px" }}
            >
              Vamos para Nuwe
            </ModalButton>
          </div>
        </div>
      </Modal>
      <style jsx>{`
        h1 {
          font-size: 24px;
          margin-bottom: 44px;
        }

        p {
          font-weight: 400;
          line-height: 24px;
          font-size: 17px;
          margin-bottom: 44px;
        }

        .flex {
          display: flex;
        }

        .content {
          margin-right: 170px;
        }
      `}</style>
    </>
  );
};

export default SuccessModal;

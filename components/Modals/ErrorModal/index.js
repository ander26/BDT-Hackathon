import ModalButton from "components/Buttons/ModalButton";
import Modal from "react-modal";

Modal.setAppElement(document.body);

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: "998",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    borderRadius: "10px",
    position: "none",
    zIndex: "999",
    border: "none",
    padding: "40px",
    maxWidth: "700px",
  },
};

const ErrorModal = ({ contentLabel, closeModal, modalIsOpen }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        contentLabel={contentLabel}
        style={customStyles}
      >
        <div className="content">
          <h1>¡Ups, algo ha ido mal!</h1>
          <p>
            Parece que el correo electrónico introducido ya está en uso. Por
            favor, revísalo y vuelve a intentarlo de nuevo.
          </p>
          <ModalButton onClick={closeModal} type="button" border="black">
            Cerrar
          </ModalButton>
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
      `}</style>
    </>
  );
};

export default ErrorModal;

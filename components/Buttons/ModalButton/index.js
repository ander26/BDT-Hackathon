const ModalButton = ({ children, onClick, type, fill, border, style }) => {
  return (
    <>
      <button onClick={onClick} type={type || "button"} style={style}>
        {children}
      </button>
      <style jsx>{`
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 56px;
          width: 170px;
          background: ${fill || "white"};
          border-radius: 6px;
          border: 1px solid ${border || "black"};
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ModalButton;

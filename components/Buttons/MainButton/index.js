import { colors } from "styles/theme";

const MainButton = ({ children, onClick, type }) => {
  return (
    <>
      <button onClick={onClick} type={type || "button"}>
        {children}
      </button>
      <style jsx>{`
        button {
          height: 58px;
          width: 100%;
          background: ${colors.icons};
          border-radius: 6px;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default MainButton;

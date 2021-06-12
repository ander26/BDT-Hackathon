import Google from "components/Icons/SocialMedia/Google";
import { colors } from "styles/theme";
import { addOpacityToColor } from "styles/utils";

const SocialButton = ({ children, onClick, type }) => {
  return (
    <>
      <button onClick={onClick} type={type || "button"}>
        <Google
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            left: "40px",
          }}
        />
        {children}
      </button>
      <style jsx>{`
        button {
          height: 58px;
          width: 100%;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
          background: white;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid ${addOpacityToColor(colors.lighterText, 0.3)};
        }
      `}</style>
    </>
  );
};

export default SocialButton;

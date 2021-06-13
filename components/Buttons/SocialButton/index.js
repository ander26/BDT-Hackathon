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
          transition: 0.4s;
          position: relative;
        }

        button:hover:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${addOpacityToColor(colors.primary, 0.1)};
          border-radius: 6px;
          animation: loaderSlide 0.6s ease;
        }

        @keyframes loaderSlide {
          0% {
            width: 0px;
          }
          100% {
            width: calc(100%);
          }
        }
      `}</style>
    </>
  );
};

export default SocialButton;

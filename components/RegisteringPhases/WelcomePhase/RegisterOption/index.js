import Hexagon from "components/Icons/Hexagon";
import HexagonIcon from "components/Icons/Hexagon/HexagonIcon";
import RightArrow from "components/Icons/RightArrow";
import { useState } from "react";
import { colors } from "styles/theme";

const RegisterOption = ({ title, description, onClick, type }) => {
  const [fill, setFill] = useState(false);
  return (
    <>
      <div
        className="container"
        onMouseEnter={() => setFill(true)}
        onMouseLeave={() => setFill(false)}
        onClick={onClick}
      >
        <div className="icon">
          <Hexagon fill={fill ? "#4F934A" : "transparent"} />
          <HexagonIcon
            style={{
              position: "absolute",
              top: "calc( 50% - 10px)",
              left: "calc( 50% - 10px)",
            }}
            fill={fill ? "white" : colors.primary}
            type={type}
          />
        </div>

        <div className="textInfo">
          <span>
            <strong>{title}</strong>
          </span>
          <span>{description}</span>
        </div>
        <div className="goIcon">
          <RightArrow style={{ visibility: fill ? "" : "hidden" }} />
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
          border-radius: 6px;
          height: 108px;
          border: 1px solid transparent;
          cursor: pointer;
          transition: 0.4s;
          margin: 30px 0px;
          display: flex;
          align-items: center;
          padding: 0px 30px;
        }

        .container:hover {
          background: ${colors.backgroundHover};
          border: 1px solid ${colors.icons};
          box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
        }

        .icon {
          position: relative;
        }

        .textInfo {
          display: flex;
          flex-direction: column;
          margin-left: 28px;
          width: 300px;
        }

        span {
          color: ${colors.lightText};
        }
        span strong {
          color: black;
          font-weight: 500;
        }
        span ~ span {
          margin-top: 5px;
        }
      `}</style>
    </>
  );
};

export default RegisterOption;

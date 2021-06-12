import { useState } from "react";
import { colors } from "styles/theme";

const TextInput = ({
  label,
  placeholder,
  required,
  type,
  value,
  onChange,
  name,
  onBlur,
  style,
}) => {
  const [show, setShow] = useState(false);
  const changeVisibility = () => {
    setShow(!show);
  };
  return (
    <>
      <label>
        {label}
        <input
          placeholder={placeholder}
          type={show ? "text" : type}
          required={required}
          value={value}
          onChange={onChange}
          name={name}
          onBlur={onBlur}
          autoComplete={type === "password" ? "on" : ""}
          style={style}
        />
        {type === "password" && (
          <div className="show" onClick={changeVisibility}>
            <span>{show ? "Ocultar" : "Mostrar"}</span>
          </div>
        )}
      </label>
      <style jsx>{`
        label {
          display: flex;
          color: ${colors.label};
          flex-direction: column;
          margin-top: 24px;
          position: relative;
        }
        input {
          height: 58px;
          width: 100%;
          border: 1px solid ${colors.lightText};
          border-radius: 6px;
          padding-left: 15px;
          color: ${colors.placeholder};
          outline: none;
        }
        input:focus {
          border: 1px solid ${colors.outline};
          box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
        }
        label > input {
          margin-top: 14px;
        }

        .show {
          position: absolute;
          top: 52px;
          right: 40px;
          color: ${colors.lightText};
          font-size: 14px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default TextInput;

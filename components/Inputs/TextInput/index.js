import { colors } from "styles/theme";

const TextInput = ({
  label,
  placeholder,
  required,
  type,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <label>
        {label}
        <input
          placeholder={placeholder}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          name={name}
        />
      </label>
      <style jsx>{`
        label {
          display: flex;
          color: ${colors.label};
          flex-direction: column;
          margin-top: 24px;
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
      `}</style>
    </>
  );
};

export default TextInput;

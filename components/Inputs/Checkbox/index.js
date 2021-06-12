import { colors } from "styles/theme";

const Checkbox = ({ children, value, onChange, name }) => {
  return (
    <>
      <label>
        <input type="checkbox" value={value} name={name} onChange={onChange} />
        {children}
      </label>
      <style jsx>{`
        input {
          margin-right: 14px;
          width: 20px;
          height: 20px;
        }

        label {
          margin: 24px 0px;
          display: flex;
          color: ${colors.label};
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Checkbox;

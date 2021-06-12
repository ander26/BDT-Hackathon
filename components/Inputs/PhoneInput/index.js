import { colors } from "styles/theme";

const PhoneInput = ({
  label,
  placeholder,
  required,
  type,
  value,
  dial,
  changeDial,
  onChange,
  name,
  countries,
}) => {
  return (
    <>
      <label>
        {label}

        <div className="dialContainer">
          {dial && countries && (
            <img
              src={`https://www.countryflags.io/${
                countries.find((element) => element.phone === dial).code
              }/flat/64.png`}
              width={20}
              height={20}
            />
          )}
          <select
            required={required}
            value={dial}
            onChange={changeDial}
            name="dial"
          >
            {countries &&
              countries.map((element) => {
                if (element.phone !== "+") {
                  return (
                    <option key={element.code} value={element.phone}>
                      {element.phone}
                    </option>
                  );
                }
                return undefined;
              })}
          </select>
        </div>

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
          position: relative;
        }
        input {
          height: 58px;
          width: 100%;
          border: 1px solid ${colors.lightText};
          border-radius: 6px;
          padding-left: 160px;
          color: ${colors.placeholder};
          outline: none;
        }
        input:focus,
        select:focus {
          border: 1px solid ${colors.outline};
          box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
        }
        label > input {
          margin-top: 14px;
        }

        .dialContainer {
          position: absolute;
          top: 46px;
          display: flex;
          justify-content: center;
          align-items: center;
          left: 25px;
        }

        select {
          height: 30px;
          border: none;
          cursor: pointer;
          outline: none;
          border-radius: 6px;
          color: ${colors.lightText};
          margin-left: 20px;
        }
      `}</style>
    </>
  );
};

export default PhoneInput;

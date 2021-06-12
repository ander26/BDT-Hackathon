import MainButton from "components/Buttons/MainButton";
import SocialButton from "components/Buttons/SocialButton";
import Checkbox from "components/Inputs/Checkbox";
import TextInput from "components/Inputs/TextInput";
import { useState } from "react";
import { colors } from "styles/theme";

const PersonalInfo = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const recordPersonalInfo = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <h1>Registra tu cuenta individual</h1>
        <span>
          Para poder revisar que se trata de una cuenta real, necesitamos la
          siguiente información
        </span>
        <form onSubmit={recordPersonalInfo}>
          <TextInput
            placeholder="Introduce el nombre"
            type="text"
            required
            label="Nombre completo *"
            value={personalInfo.name}
            name="name"
            onChange={(e) => {
              console.log(personalInfo);
              setPersonalInfo({ ...personalInfo, name: e.target.value });
            }}
          />
          <TextInput
            placeholder="Introduce la dirección de correo"
            type="email"
            required
            label="Correo electrónico *"
            value={personalInfo.email}
            name="email"
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, email: e.target.value })
            }
          />
          <TextInput
            placeholder="Introduce la contraseña"
            type="password"
            required
            label="Contraseña *"
            value={personalInfo.password}
            name="password"
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, password: e.target.password })
            }
          />
          <Checkbox>Acepto los términos y condiciones</Checkbox>
          <MainButton type="submit">Registrar cuenta</MainButton>
          <div className="or">
            <span>o</span>
          </div>
          <SocialButton>Regístrate con Google</SocialButton>
        </form>
      </div>
      <style jsx>{`
        .container {
          margin-bottom: 20px;
        }
        .container > span {
          color: ${colors.lightText};
        }
        .or {
          margin: 20px 0px;
          color: ${colors.lighterText};
          display: flex;
          position: relative;
          justify-content: center;
        }

        .or:before {
          content: "";
          position: absolute;
          top: calc(50%);
          height: 1px;
          border-radius: 999px;
          width: 100%;
          background: ${colors.lighterText};
          left: 0px;
          z-index: -1;
        }

        .or span {
          width: 40px;
          background: white;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default PersonalInfo;

import { colors } from "styles/theme";
import { HEXAGON_ICONS, USER_TYPES } from "utils/constants";
import RegisterOption from "./RegisterOption";

const WelcomePhase = ({ goAhead, setUser, user }) => {
  const proceed = (type) => {
    setUser({ ...user, type: type });
    goAhead();
  };
  return (
    <>
      <div className="container">
        <h1>¡Únete a la comunidad!</h1>
        <span>Para empezar, dinos que cuenta te gustaría abrir.</span>
        <RegisterOption
          title={"Developers"}
          description={"Cuenta personas para entrar en el mundo dev"}
          onClick={() => proceed(USER_TYPES.DEVELOPER)}
          type={HEXAGON_ICONS.USER}
        />
        <RegisterOption
          title={"Business"}
          description={"Tienes o perteneces a una compañía"}
          onClick={() => proceed(USER_TYPES.BUSINESS)}
          type={HEXAGON_ICONS.BRIEFCASE}
        />
      </div>
      <style jsx>{`
        .container > span {
          color: ${colors.lightText};
        }
      `}</style>
    </>
  );
};

export default WelcomePhase;

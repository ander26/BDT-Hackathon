import Back from "components/Icons/Back";
import CreditCardInfo from "components/RegisteringPhases/CreditCardInfo";
import LocationInfo from "components/RegisteringPhases/LocationInfo";
import PersonalInfo from "components/RegisteringPhases/PersonalInfo";
import WelcomePhase from "components/RegisteringPhases/WelcomePhase";
import { useState } from "react";
import { colors } from "styles/theme";
import { REGISTERING_PHASES } from "utils/constants";

const MainContent = () => {
  const [phase, setPhase] = useState(REGISTERING_PHASES.WELCOME_VIEW.index);

  const goBack = () => {
    setPhase(phase - 1);
  };

  const goAhead = () => {
    setPhase(phase + 1);
  };

  return (
    <>
      <div className="container">
        <div className="navigationBar">
          {phase === REGISTERING_PHASES.WELCOME_VIEW.index ? (
            <div className="login">
              <span>
                ¿Ya tienes cuenta? <a>Inicia sesión</a>
              </span>
            </div>
          ) : (
            <div className="navigation">
              <div className="back" onClick={goBack}>
                <Back />
                <span>
                  <strong>Volver</strong>
                </span>
              </div>
              <div className="currentPhase">
                <span>
                  PASO{" "}
                  {phase.toLocaleString("es-ES", {
                    minimumIntegerDigits: 2,
                  })}
                  /
                  {(Object.keys(REGISTERING_PHASES).length - 1).toLocaleString(
                    "es-ES",
                    {
                      minimumIntegerDigits: 2,
                    }
                  )}
                </span>
                <span>
                  <strong>
                    {
                      REGISTERING_PHASES[Object.keys(REGISTERING_PHASES)[phase]]
                        .title
                    }
                  </strong>
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="phases">
          {phase === REGISTERING_PHASES.WELCOME_VIEW.index && (
            <WelcomePhase goAhead={goAhead} />
          )}
          {phase === REGISTERING_PHASES.PERSONAL_INFO.index && <PersonalInfo />}
          {phase === REGISTERING_PHASES.LOCATION.index && <LocationInfo />}
          {phase === REGISTERING_PHASES.CREDIT_CARD.index && <CreditCardInfo />}
        </div>
      </div>
      <style jsx>{`
        .container {
          height: 100%;
          padding: 30px 40px;
          display: flex;
          flex-direction: column;
        }
        .login {
          display: flex;
          justify-content: flex-end;
        }
        .login > span {
          color: ${colors.lightText};
        }

        .phases {
          width: 100%;
          max-width: 600px;
          height: 100%;
          display: flex;
          padding-left: 7vw;
          align-items: center;
          margin-top: 20px;
        }
        .navigation {
          display: flex;
          justify-content: space-between;
        }

        .back {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .currentPhase {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .currentPhase {
          color: ${colors.lighterText};
          font-size: 14px;
        }

        .back span strong,
        .currentPhase span strong {
          color: ${colors.lightText};
          font-weight: 600;
          margin-left: 9px;
          font-size: 16px;
        }
      `}</style>
    </>
  );
};

export default MainContent;

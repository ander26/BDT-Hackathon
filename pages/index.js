import Quotes from "components/Icons/Quotes";
import RightBorderSquare from "components/Icons/RightBorderSquare";
import MainContent from "components/MainContent";
import { breakpoints, colors } from "styles/theme";
import { addOpacityToColor } from "styles/utils";

export default function Home() {
  return (
    <>
      <div className="container">
        <main>
          <div className="grid">
            <div className="leftContainer">
              <div className="quote">
                <Quotes fill={addOpacityToColor(colors.secondary, 0.5)} />
                <p>
                  Nuwe es la platforma que convierte el desarrollo profesional,
                  la búsquda de trabajo y la conexiones de personas y empresas
                  en un juego. Haciendo que puedas centrarte en lo que te gusta,
                  programar, diseñar, crear, planear...
                </p>
                <div className="leftAlign">
                  <RightBorderSquare width={34} height={34} />
                </div>
              </div>
            </div>
            <div className="mainContent">
              <MainContent />
            </div>
          </div>
        </main>
      </div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          min-height: 100vh;
        }

        .leftContainer {
          background: linear-gradient(
              180deg,
              ${addOpacityToColor(colors.primary, 0.9)},
              ${addOpacityToColor(colors.secondary, 0.9)}
            ),
            url("/images/building.png");
          background-size: cover;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0px 40px;
        }

        .quote > p {
          color: white;
          font-size: 16px;
          line-height: 38px;
          max-width: 350px;
          margin: 35px 0px;
        }

        .leftAlign {
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: ${breakpoints.mobile}) {
          .leftContainer {
            display: none;
          }
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

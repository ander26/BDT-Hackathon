import { NextSeo } from "next-seo";
import { colors, fonts } from "styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="BDT Hackathon Nuwe"
        description="Desarrollo realizado para el Hackathon impulsado por Nuwe"
        canonical="https://bdt-hackathon.vercel.app/"
        openGraph={{
          url: "https://bdt-hackathon.vercel.app/",
          title: "BDT Hackathon Nuwe",
          description:
            "Desarrollo realizado para el Hackathon impulsado por Nuwe",
          images: [
            {
              url: "https://media-exp1.licdn.com/dms/image/C4E1BAQE7oS5DoVCTow/company-background_10000/0/1614961937859?e=2159024400&v=beta&t=5hBIvSEDk1LaBKgYtO176BQ-KCgMg36qc9nmdkxNAqk",
              width: 1130,
              height: 191,
              alt: "Encabezado Nuwe",
            },
          ],
          site_name: "BDT Hackathon Nuwe",
        }}
      />
      <Component {...pageProps} />
      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: ${fonts.base};
          }
          a {
            color: ${colors.link};
            text-decoration: none;
            cursor: pointer;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;

import MainButton from "components/Buttons/MainButton";
import Lock from "components/Icons/Lock";
import CountryDropdown from "components/Inputs/CountryDropdown";
import TextInput from "components/Inputs/TextInput";
import PhoneInput from "components/Inputs/PhoneInput";
import { useEffect, useState } from "react";
import { colors } from "styles/theme";
import dynamic from "next/dynamic";

const ErrorModal = dynamic(() => import("components/Modals/ErrorModal"), {
  ssr: false,
});

const LocationInfo = ({ goAhead }) => {
  const [locationInfo, setLocationInfo] = useState({
    phone: "",
    address: "",
    country: "",
    dial: "",
  });

  const [countries, setCountries] = useState();

  const [modalInfo, setModalInfo] = useState({
    open: false,
    title: "¡Ups, algo ha ido mal!",
    description: "",
  });

  useEffect(async () => {
    const localCountries = (await import("utils/localStorage")).getCountries();
    if (localCountries) {
      setCountries(localCountries);
      setLocationInfo({
        ...locationInfo,
        country: localCountries[0].name,
        dial: localCountries[0].phone,
      });
    } else {
      const fetchCountries = await (
        await import("utils/country")
      ).getCountries();
      if (fetchCountries) {
        setCountries(fetchCountries);
        setLocationInfo({
          ...locationInfo,
          country: fetchCountries[0].name,
          dial: fetchCountries[0].phone,
        });
      }
    }
  }, []);

  const recordLocation = (e) => {
    e.preventDefault();
    console.log(locationInfo);
    if (locationInfo.phone.trim().length === 0) {
      setModalInfo({
        ...modalInfo,
        description:
          "Parece que no has introducido ningún teléfono. Por favor, revísalo y vuelve a intentarlo de nuevo.",
        open: true,
      });
    } else if (locationInfo.address.trim().length === 0) {
      setModalInfo({
        ...modalInfo,
        description:
          "Parece que no has introducido ninguna dirección. Por favor, revísalo y vuelve a intentarlo de nuevo.",
        open: true,
      });
    } else {
      goAhead();
    }
  };
  return (
    <>
      <div className="container">
        <h1>¡Completa tu perfil!</h1>
        <span>
          Para poder revisar que se trata de una cuenta real, necesitamos la
          siguiente información
        </span>
        <form onSubmit={recordLocation}>
          <PhoneInput
            placeholder="Introduce el número de teléfono"
            type="text"
            label="Número de teléfono *"
            required
            value={locationInfo.phone}
            name="phone"
            onChange={(e) => {
              setLocationInfo({ ...locationInfo, phone: e.target.value });
            }}
            countries={countries}
            dial={locationInfo.dial}
            changeDial={(e) => {
              setLocationInfo({ ...locationInfo, dial: e.target.value });
            }}
          />
          <TextInput
            placeholder="Introduce la dirección completa"
            type="text"
            required
            label="Dirección *"
            value={locationInfo.address}
            name="address"
            onChange={(e) =>
              setLocationInfo({ ...locationInfo, address: e.target.value })
            }
          />

          <CountryDropdown
            placeholder="Seleccione un pais"
            required
            label="País de residencia"
            value={locationInfo.country}
            name="country"
            onChange={(e) =>
              setLocationInfo({ ...locationInfo, country: e.target.value })
            }
            countries={countries}
          />

          <MainButton type="submit">Guardar y continuar</MainButton>
          <div className="secureInfo">
            <Lock />
            <span>Tu información es segura</span>
          </div>
        </form>
      </div>
      <ErrorModal
        contentLabel="Error"
        closeModal={() => setModalInfo({ ...modalInfo, open: false })}
        modalIsOpen={modalInfo.open}
        title={modalInfo.title}
        description={modalInfo.description}
      />
      <style jsx>{`
        .container {
          margin-bottom: 20px;
        }
        .container > span {
          color: ${colors.lightText};
        }
        .secureInfo {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
          color: ${colors.lightText};
        }
      `}</style>
    </>
  );
};

export default LocationInfo;

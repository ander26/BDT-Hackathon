export const REGISTERING_PHASES = {
  WELCOME_VIEW: { index: 0, title: "Bienvenida" },
  PERSONAL_INFO: { index: 1, title: "Personal Info" },
  LOCATION: { index: 2, title: "Localización" },
  CREDIT_CARD: { index: 3, title: "Verificación por tarjeta" },
};

export const USER_TYPES = {
  DEVELOPER: "developer",
  BUSINESS: "business",
};

export const HEXAGON_ICONS = {
  BRIEFCASE: "briefcase",
  USER: "user",
};

export const CUSTOM_STYLES_MODAL = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: "998",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    borderRadius: "10px",
    position: "none",
    zIndex: "999",
    border: "none",
    padding: "40px",
    maxWidth: "700px",
  },
};

export const EMAIL_REGULAR_EXPRESSION =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const CREDIT_CARD_REGULAR_EXPRESSION =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;

export const CVV_REGULAR_EXPRESSION = /^[0-9]{3,4}$/;

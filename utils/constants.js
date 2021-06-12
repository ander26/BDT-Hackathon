export const REGISTERING_PHASES = {
  WELCOME_VIEW: { index: 0, title: "Bienvenida" },
  PERSONAL_INFO: { index: 1, title: "Personal Info" },
  LOCATION: { index: 2, title: "Localización" },
  CREDIT_CARD: { index: 3, title: "Verificación por tarjeta" },
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

import { colors } from "styles/theme";

const Lock = (props) => {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.917 4.958h.583a1.17 1.17 0 011.167 1.167v5.833a1.17 1.17 0 01-1.167 1.167h-7a1.17 1.17 0 01-1.167-1.167V6.125A1.17 1.17 0 013.5 4.958h.583V3.792a2.918 2.918 0 015.834 0v1.166zM7 2.042c-.968 0-1.75.781-1.75 1.75v1.166h3.5V3.792c0-.969-.782-1.75-1.75-1.75zm-3.5 9.916V6.125h7v5.833h-7zm4.667-2.916A1.17 1.17 0 017 10.208a1.17 1.17 0 01-1.167-1.166A1.17 1.17 0 017 7.875a1.17 1.17 0 011.167 1.167z"
        fill={props.fill || colors.lightText}
      />
    </svg>
  );
};

export default Lock;

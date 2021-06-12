import { colors } from "styles/theme";

const RightArrow = (props) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.59 3.577a.833.833 0 10-1.18 1.179l4.412 4.41H4.167a.833.833 0 100 1.667h9.655L9.41 15.244a.833.833 0 101.178 1.179l5.834-5.834a.833.833 0 000-1.178l-5.834-5.834z"
        fill={colors.icons}
      />
    </svg>
  );
};

export default RightArrow;

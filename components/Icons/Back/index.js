import { colors } from "styles/theme";

const Back = (props) => {
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
        d="M14.863 3.225L13.379 1.75 5.138 10l8.25 8.25 1.475-1.475L8.088 10l6.775-6.775z"
        fill={props.fill ? props.fill : colors.lightText}
      />
    </svg>
  );
};

export default Back;

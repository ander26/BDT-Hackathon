import { colors } from "styles/theme";

const Hexagon = (props) => {
  return (
    <>
      <svg
        width={50}
        height={48}
        viewBox="0 0 50 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M1.095 18.233L25 .865l23.905 17.368-9.131 28.101H10.226l-9.13-28.101z"
          stroke={props.stroke ? props.stroke : colors.icons}
          fill={props.fill ? props.fill : ""}
          strokeWidth={1.4}
        />
      </svg>
      <style jsx>{`
        path {
          transition: 0.4s;
        }
      `}</style>
    </>
  );
};

export default Hexagon;

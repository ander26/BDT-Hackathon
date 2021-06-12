import { colors } from "styles/theme";
import { HEXAGON_ICONS } from "utils/constants";

const HexagonIcon = (props) => {
  return (
    <>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {props.type === HEXAGON_ICONS.BRIEFCASE && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.333 6.667A.833.833 0 002.5 7.5v8.333c0 .46.373.834.833.834h13.334c.46 0 .833-.373.833-.834V7.5a.833.833 0 00-.833-.833H3.333zm-2.5.833a2.5 2.5 0 012.5-2.5h13.334a2.5 2.5 0 012.5 2.5v8.333a2.5 2.5 0 01-2.5 2.5H3.333a2.5 2.5 0 01-2.5-2.5V7.5z"
              fill={props.fill ? props.fill : colors.icons}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.565 2.399a2.5 2.5 0 011.768-.732h3.334a2.5 2.5 0 012.5 2.5V17.5a.833.833 0 01-1.667 0V4.167a.833.833 0 00-.833-.834H8.333a.833.833 0 00-.833.834V17.5a.833.833 0 01-1.667 0V4.167a2.5 2.5 0 01.732-1.768z"
              fill={props.fill ? props.fill : colors.icons}
            />
          </>
        )}

        {props.type === HEXAGON_ICONS.USER && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.72 12.887a4.167 4.167 0 012.947-1.22h6.666a4.167 4.167 0 014.167 4.166V17.5a.833.833 0 01-1.667 0v-1.667a2.5 2.5 0 00-2.5-2.5H6.667a2.5 2.5 0 00-2.5 2.5V17.5a.833.833 0 01-1.667 0v-1.667c0-1.105.439-2.165 1.22-2.946zM10 3.333a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-4.167 2.5a4.167 4.167 0 118.334 0 4.167 4.167 0 01-8.334 0z"
              fill={props.fill ? props.fill : "white"}
            />
          </>
        )}
      </svg>
    </>
  );
};

export default HexagonIcon;

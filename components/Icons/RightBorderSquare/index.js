const RightBorderSquare = (props) => {
  return (
    <svg
      viewBox="0 0 34 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 0h12.5v33H0V20.5h21V0z"
        fill={props.fill ? props.fill : "#fff"}
      />
    </svg>
  );
};

export default RightBorderSquare;

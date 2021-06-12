const Correct = (props) => {
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
        d="M.833 10a9.167 9.167 0 1118.334 0A9.167 9.167 0 01.833 10z"
        fill="#08AD36"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.425 6.702a.833.833 0 010 1.179l-5.172 5.417a.833.833 0 01-1.179 0l-2.5-2.5a.833.833 0 111.179-1.179l1.91 1.91 4.584-4.827a.833.833 0 011.178 0z"
        fill="#fff"
      />
    </svg>
  );
};

export default Correct;

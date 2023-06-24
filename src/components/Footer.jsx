const Footer = ({ onClick }) => {
  return (
    <div className=" flex justify-between  items-center">
      <button
        className="text-coolGray hover:text-marineBlue transition"
        onClick={() => onClick("prev")}
      >
        Go Back
      </button>
      <button className=" next-btn" onClick={() => onClick("next")}>
        Next Step
      </button>
    </div>
  );
};

export default Footer;

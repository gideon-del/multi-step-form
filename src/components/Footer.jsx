const Footer = ({ onClick }) => {
  return (
    <div className=" flex justify-between  items-center">
      <button className="text-coolGray hover:text-marineBlue transition">
        Go Back
      </button>
      <button className=" next-btn" type="submit" onClick={onClick}>
        Next Step
      </button>
    </div>
  );
};

export default Footer;

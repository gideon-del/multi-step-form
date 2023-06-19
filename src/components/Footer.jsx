import React from "react";

const Footer = () => {
  return (
    <div className=" flex justify-between  items-center">
      <button className="text-coolGray hover:text-marineBlue transition">
        Go Back
      </button>
      <button className="bg-marineBlue font-Bold text-white px-6 py-3 after:transition-all after:duration-300 after:ease-in-out relative rounded-md ml-auto  mt-3 mb-2 after:bg-white after:absolute after:inset-0 after:opacity-0 hover:after:opacity-40">
        Next Step
      </button>
    </div>
  );
};

export default Footer;

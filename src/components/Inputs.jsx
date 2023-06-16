import React from "react";

const Inputs = ({ type, name, placeholder, title }) => {
  return (
    <div className="flex flex-col gap-1 ">
      <label htmlFor="name" className="capitalize text-marineBlue">
        {title}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="border border-coolGray max-w-xl px-4 py-2 rounded-lg focus-within:outline-none focus-within:border-marineBlue transition  text-marineBlue shadow-sm"
      />
    </div>
  );
};

export default Inputs;

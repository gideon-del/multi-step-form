import React from "react";
import Inputs from "./Inputs";
import { firstInputs } from "../data";

const FirstStep = () => {
  return (
    <div className=" md:h-full flex flex-col bg-white px-4 py-3 w-full rounded-lg relative -top-10">
      <h1 className="font-Bold text-marineBlue text-xl md:text-4xl">
        Personal info
      </h1>
      <p className="text-coolGray font-Regular md:mt-3 mt-1">
        Please provide your name, email address, and phone number
      </p>
      <form className="flex flex-col md:gap-5 gap-3 md:mt-10 mt-3 flex-1">
        {firstInputs.map((input) => (
          <Inputs key={input.title} {...input} />
        ))}
      </form>
    </div>
  );
};

export default FirstStep;

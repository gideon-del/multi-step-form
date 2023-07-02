import React from "react";
import success from "../assets/images/icon-thank-you.svg";
const Complete = () => {
  return (
    <div className=" md:h-full flex flex-col justify-center items-center bg-white px-5 py-6 w-full rounded-lg relative -top-10 gap-3 shadow-xl md:shadow-none text-center">
      <img
        src={success}
        alt="Thank you"
        width={100}
        height={100}
        className=" w-1/4 max-w-[100px]"
      />
      <h1 className="text-marineBlue font-Bold md:text-xl lg:text-3xl ">
        Thank you!
      </h1>
      <p className="text-coolGray font-Medium">
        Thanks for confirmoing your subscription! We hope you have fun using our
        platform. If you ever need support, please feel to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default Complete;

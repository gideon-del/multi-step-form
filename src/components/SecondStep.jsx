import { useState } from "react";
import { plans } from "../data";

const SecondStep = () => {
  const [checked, setChecked] = useState(false);
  const time = checked ? "yearly" : "monthly";
  const [currentPlan, setCurrentPlan] = useState(0);
  const togglePlan = (plan) => {
    setCurrentPlan(plan);
  };
  return (
    <div className=" md:h-full flex flex-col bg-white px-4 py-3 w-full rounded-lg relative -top-10">
      <h1 className="font-Bold text-marineBlue text-xl md:text-4xl">
        Select your Plan
      </h1>
      <p className="text-coolGray font-Regular md:mt-3 mt-1">
        You have the option of monthly or yearly billing
      </p>
      <div className="flex flex-col md:gap-5 gap-3 md:mt-10 mt-3 ">
        <div className="flex  gap-5 md:gap-7 lg:gap-10 flex-col md:flex-row">
          {plans.map((plan, i) => (
            <div
              className={`md:pr-10 md:pl-5 px-4 md:aspect-square ${
                i === currentPlan ? "border-marineBlue" : "border-coolGray"
              } border md:w-fit md:py-6 flex md:flex-col items-start rounded-lg hover:border-marineBlue transition cursor-pointer flex-1 py-2 gap-6`}
              key={plan.title}
              onClick={() => togglePlan(i)}
            >
              <img src={plan.img} />
              <div>
                <h1 className="flex flex-col md:gap-3 gap-1 md:mt-9 font-Bold text-marineBlue md:mb-1">
                  {plan.title}
                  <span className="text-coolGray font-Regular">
                    {plan[time]}
                  </span>
                </h1>

                <p
                  className={`font-Medium md:text-base text-marineBlue ${
                    time !== "yearly" && "opacity-0"
                  } `}
                >
                  2 months free
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-ligthBlue py-3 px-3 flex flex-row justify-center items-center gap-5 md:gap-7 lg:gap-10">
          <p>Monthly</p>
          <div>
            <input type="checkbox" id="plan" name="plan" className="hidden" />
            <label
              className={`w-16 flex items-center ${
                checked ? "justify-end" : "justify-start"
              } h-5 py-3 rounded-full bg-marineBlue cursor-pointer relative after:absolute after:w-1/4 after:h-3/4 after:rounded-full after:bg-white after:inset-y-auto after:transition-all transition-all duration-1000 after:duration-500 ease-in-out after:ease-out after:mx-1`}
              onClick={() => setChecked((prev) => !prev)}
            ></label>
          </div>
          <p className="text-coolGray">Yearly</p>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;

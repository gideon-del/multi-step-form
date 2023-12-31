/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { forwardRef } from "react";
import { addons } from "../data";
import AddOns from "./AddOns";
import { usePlan } from "../context/PlanContext";
const ThirdStep = (prop, ref) => {
  const { getSlection } = usePlan();
  const selectedDuration = getSlection(1)?.duration;
  return (
    <div className=" md:h-full flex flex-col bg-white px-4 py-3 w-full rounded-lg relative -top-10">
      <h1 className="font-Bold text-marineBlue text-xl md:text-4xl">
        Pick add-ons
      </h1>
      <p className="text-coolGray font-Regular md:mt-3 mt-1">
        Add-ons help enhance your gaming experience.
      </p>
      <form className="flex flex-col md:gap-5 gap-3 md:mt-10 mt-3 " ref={ref}>
        {addons.map((add) => (
          <AddOns key={add.id} {...add} billing={add[selectedDuration]} />
        ))}
      </form>
    </div>
  );
};

export default forwardRef(ThirdStep);

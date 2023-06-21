import { addons } from "../data";
import AddOns from "./AddOns";

const ThirdStep = () => {
  return (
    <div className=" md:h-full flex flex-col bg-white px-4 py-3 w-full rounded-lg relative -top-10">
      <h1 className="font-Bold text-marineBlue text-xl md:text-4xl">
        Pick add-ons
      </h1>
      <p className="text-coolGray font-Regular md:mt-3 mt-1">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col md:gap-5 gap-3 md:mt-10 mt-3 ">
        {addons.map((add) => (
          <AddOns key={add.id} {...add} />
        ))}
      </div>
    </div>
  );
};

export default ThirdStep;

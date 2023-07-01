/* eslint-disable no-unused-vars */
import { usePlan } from "../context/PlanContext";

const FourthStep = () => {
  const { getSlection, changeStep } = usePlan();
  const billingPlan = getSlection(1);
  const addOns = getSlection(2);
  const extractPrice = (add) => {
    const { price, suffix } = add[billingPlan.duration];
    return { price, suffix };
  };

  return (
    <div className=" md:h-full flex flex-col bg-white px-4 py-3 w-full rounded-lg relative -top-10 gap-3 shadow-xl md:shadow-none">
      <h1 className="font-Bold text-marineBlue text-xl md:text-4xl">
        Finishing up
      </h1>
      <p className="text-coolGray font-Regular md:mt-3 mt-1">
        Double check everything looks OK before confirming.
      </p>
      <div className="bg-alabaster md:bg-transparent flex flex-col gap-2 p-3">
        <div className=" font-Bold text-marineBlue flex justify-between items-center border-b border-b-coolGray pb-4 ">
          <p className="flex flex-col text-base md:text-lg capitalize">
            {billingPlan?.title}({billingPlan?.duration}){" "}
            <span
              className="underline text-purplishBlue font-Regular"
              onClick={() => changeStep(1)}
            >
              Change
            </span>
          </p>
          <p className="">
            ${billingPlan?.billing.price}/{billingPlan?.billing.suffix}
          </p>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          {addOns.map((add) => {
            const { price, suffix } = extractPrice(add);
            return (
              <p
                className="text-coolGray flex justify-between items-center font-Regular"
                key={add.id}
              >
                {add.title}{" "}
                <span className="text-purplishBlue">
                  +${price}/{suffix}
                </span>{" "}
              </p>
            );
          })}
        </div>
      </div>
      <p className="font-Regular text-coolGray text-base flex justify-between items-center p-3 ">
        Total (per month){" "}
        <span className="font-Bold text-purplishBlue md:text-xl">+$12/mo</span>
      </p>
    </div>
  );
};

export default FourthStep;

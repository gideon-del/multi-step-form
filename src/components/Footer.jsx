/* eslint-disable react/prop-types */
import { usePlan } from "../context/PlanContext";

const Footer = ({ OnClick }) => {
  const { changeStep, steps, allFormCompleted } = usePlan();

  return (
    <div className=" flex justify-between  items-center">
      {steps > 0 && (
        <button
          className="text-coolGray hover:text-marineBlue transition"
          onClick={() => changeStep("prev")}
        >
          Go Back
        </button>
      )}
      {steps !== 3 ? (
        <button className=" next-btn" onClick={OnClick}>
          Next Step
        </button>
      ) : (
        <button className=" next-btn" onClick={allFormCompleted}>
          Confirm
        </button>
      )}
    </div>
  );
};

export default Footer;

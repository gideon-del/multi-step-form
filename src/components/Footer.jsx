import { usePlan } from "../context/PlanContext";

const Footer = () => {
  const { changeStep, currentSelection, steps } = usePlan();
  const next = () => {
    if (!currentSelection) return;
    changeStep("next");
  };
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
      <button className=" next-btn" onClick={next}>
        Next Step
      </button>
    </div>
  );
};

export default Footer;

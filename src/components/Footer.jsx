import { usePlan } from "../context/PlanContext";
import useSteps from "../hooks/useSteps";

const Footer = ({ onClick }) => {
  const { changeStep } = usePlan();
  // const next = () => {
  //   if (currentStep < 3 && fieldInPlan.includes(fields[currentStep])) {
  //     changeStep("next");
  //   }
  // };
  return (
    <div className=" flex justify-between  items-center">
      <button
        className="text-coolGray hover:text-marineBlue transition"
        onClick={() => changeStep("prev")}
      >
        Go Back
      </button>
      <button className=" next-btn" onClick={() => changeStep("next")}>
        Next Step
      </button>
    </div>
  );
};

export default Footer;

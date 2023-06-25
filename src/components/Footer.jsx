import { usePlan } from "../context/PlanContext";

const Footer = () => {
  const { changeStep } = usePlan();
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

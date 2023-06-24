import useSteps from "../hooks/useSteps";

const Footer = () => {
  const { nextStep, prevStep, fieldInPlan, fields, currentStep } = useSteps();
  const next = () => {
    if (currentStep < 3 && fieldInPlan.includes(fields[currentStep])) {
      nextStep();
    }
  };
  return (
    <div className=" flex justify-between  items-center">
      <button
        className="text-coolGray hover:text-marineBlue transition"
        onClick={prevStep}
      >
        Go Back
      </button>
      <button className=" next-btn" onClick={nextStep}>
        Next Step
      </button>
    </div>
  );
};

export default Footer;

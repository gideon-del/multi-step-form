import useSteps from "../hooks/useSteps";

const Footer = ({ onClick }) => {
  const { changeStep } = useSteps();
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
      <button
        className=" next-btn"
        onClick={() =>
          onClick((prev) => {
            if (prev >= 3) return 0;
            return prev + 1;
          })
        }
      >
        Next Step
      </button>
    </div>
  );
};

export default Footer;

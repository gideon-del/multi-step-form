import { steps } from "../data";
import bgDesk from "../assets/images/bg-sidebar-desktop.svg";
import bgMob from "../assets/images/bg-sidebar-mobile.svg";
import { usePlan } from "../context/PlanContext";
const Steps = () => {
  const { steps: currentStep, changeStep, currentSelection } = usePlan();
  const canMoveTonextStep = (i) => {
    if (!(i < currentStep)) return;
    changeStep(i);
  };
  return (
    <section className="stack">
      <picture>
        <source srcSet={bgMob} media=" (max-width:768px) " />
        <img
          src={bgDesk}
          className="w-full md:h-full object-cover   md:rounded-lg"
        />
      </picture>
      <section className=" md:pt-10 flex gap-5 items-center justify-center md:flex-col md:justify-start md:gap-10 md:items-start md:pl-7">
        {steps.map((step, i) => (
          <div
            className="flex gap-4  items-center justify-start cursor-pointer"
            key={step.title}
            onClick={() => canMoveTonextStep(i)}
          >
            <span
              className={`${
                i === currentStep
                  ? "bg-ligthBlue"
                  : "border-white border text-white"
              } md:text-2xl p-6 w-8 h-8 rounded-full  flex items-center justify-center transition`}
            >
              {i + 1}
            </span>
            <div className="hidden md:flex md:flex-col">
              <p
                className="font-Regular text-ligthGray uppercase
                "
              >
                Step {i + 1}
              </p>
              <p className="font-Bold uppercase text-white text-lg">
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Steps;

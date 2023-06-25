import { createContext, useContext, useState } from "react";

const PlansContext = createContext({
  steps: 0,
  changeStep: () => {},
});

const PlanProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const changeStep = (pos) => {
    if (typeof pos === "number" && pos >= 0 && pos <= 3) {
      setStep(pos);
      return;
    }
    if (pos === "next") {
      setStep((prev) => (prev >= 3 ? 0 : prev + 1));
    } else {
      setStep((prev) => (prev <= 0 ? 3 : prev - 1));
    }
  };
  return (
    <PlansContext.Provider
      value={{
        steps: step,
        changeStep,
      }}
    >
      {children}
    </PlansContext.Provider>
  );
};

export const usePlan = () => useContext(PlansContext);

export default PlanProvider;

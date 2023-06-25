import { createContext, useContext, useMemo, useState } from "react";
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";
import ThirdStep from "../components/ThirdStep";
import FourthStep from "../components/FourthStep";

const PlansContext = createContext({
  steps: 0,
  changeStep: () => {},
  currentStep: {},
});

const PlanProvider = ({ children }) => {
  const Forms = useMemo(
    () => [
      {
        component: FirstStep,
        ref: true,
      },
      {
        component: SecondStep,
        ref: false,
      },
      {
        component: ThirdStep,
        ref: false,
      },
      {
        component: FourthStep,
        ref: false,
      },
    ],
    []
  );
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
        currentStep: Forms[step],
      }}
    >
      {children}
    </PlansContext.Provider>
  );
};

export const usePlan = () => useContext(PlansContext);

export default PlanProvider;

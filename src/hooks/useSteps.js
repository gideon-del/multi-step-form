/* eslint-disable no-unused-vars */
import { useMemo, useState } from "react";
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";
import ThirdStep from "../components/ThirdStep";
import FourthStep from "../components/FourthStep";

const useSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [plans, setPlans] = useState({});
  const Forms = useMemo(
    () => [
      {
        component: FirstStep,
      },
      {
        component: SecondStep,
      },
      {
        component: ThirdStep,
      },
      {
        component: FourthStep,
      },
    ],
    []
  );
  const CurForm = Forms[currentStep].component;
  const firstStep = (vals) => {
    setPlans((plans) => ({ ...plans, personalInfo: vals }));
  };
  const changeStep = (pos) => {
    if (pos === "next") {
      setCurrentStep((prev) => (prev >= 3 ? 0 : prev + 1));
    } else {
      setCurrentStep((prev) => (prev <= 0 ? 3 : prev - 1));
    }
  };
  return {
    changeStep,
    currentStep,
    CurForm,
  };
};

export default useSteps;

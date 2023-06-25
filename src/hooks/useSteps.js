/* eslint-disable no-unused-vars */
import { useMemo, useState } from "react";
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";
import ThirdStep from "../components/ThirdStep";
import FourthStep from "../components/FourthStep";

const useSteps = () => {
  // const fields = useMemo(() => ["info", "plan", "addOns"], []);
  const [currentStep, setCurrentStep] = useState(0);
  const [plans, setPlans] = useState(null);
  // const fieldInPlan = Object.keys(plans) ?? [];
  // const Forms = useMemo(
  //   () => [
  //     {
  //       component: FirstStep,
  //     },
  //     {
  //       component: SecondStep,
  //     },
  //     {
  //       component: ThirdStep,
  //     },
  //     {
  //       component: FourthStep,
  //     },
  //   ],
  //   []
  // );
  // const CurForm = Forms[currentStep].component;
  // console.log(Forms[currentStep]);
  const firstStep = (vals) => {
    setPlans((plans) => ({ ...plans, personalInfo: vals }));
  };
  const changeStep = (pos) => {
    setCurrentStep((prev) => {
      console.log(currentStep);
      if (prev >= 3) return 0;
      return prev + 1;
    });
  };

  return {
    changeStep,
    currentStep,
    // CurForm,
    plans,
  };
};

export default useSteps;

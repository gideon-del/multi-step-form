/* eslint-disable no-unused-vars */
import { useMemo, useState } from "react";
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";

const useSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [plans, setPlans] = useState({});
  const Forms = useMemo(
    () => [<FirstStep key={"f1"} />, <SecondStep key={"f2"} />],
    []
  );
  const firstStep = (vals) => {
    setPlans((plans) => ({ ...plans, personalInfo: vals }));
  };
  const changeStep = (pos) => {
    setCurrentStep((prev) => (prev >= 3 ? 0 : prev + 1));
  };
  return {
    changeStep,
    currentStep,
  };
};

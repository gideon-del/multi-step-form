/* eslint-disable no-unused-vars */
import { useState } from "react";

const useSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [plans, setPlans] = useState({});
  const firstStep = (vals) => {
    setPlans((plans) => ({ ...plans, personalInfo: vals }));
  };
};

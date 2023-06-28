/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState } from "react";
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";
import ThirdStep from "../components/ThirdStep";
import FourthStep from "../components/FourthStep";
import { firstInputs } from "../data";
import { validate as valid } from "../lib/helpers";

const PlansContext = createContext({
  steps: 0,
  changeStep: () => {},
  currentStep: {},
  currentSelection: {},
  error: "",
  setError: () => {},
});

const PlanProvider = ({ children }) => {
  const [error, setError] = useState("");
  const Forms = useMemo(
    () => [
      {
        component: FirstStep,
        ref: true,
        validate(ref) {
          const data = new FormData(ref);
          const val = Object.fromEntries(data.entries());
          const transfromedVal = Object.entries(val).map((val, i) => {
            const obj = firstInputs[i];
            return {
              ...obj,
              value: val[1],
            };
          });
          const isValid = valid(transfromedVal);

          if (isValid !== "OK") {
            setError(isValid);
            return;
          }
          setError("");
        },
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
  const mainPlan = useMemo(() => ["info", "plan", "addOn"], []);
  const [selection, setSelection] = useState({
    info: null,
    plan: null,
    addOn: null,
  });
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
        currentSelection: selection[mainPlan[step]],
        error,
      }}
    >
      {children}
    </PlansContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePlan = () => useContext(PlansContext);

export default PlanProvider;

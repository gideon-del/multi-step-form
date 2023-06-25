/* eslint-disable no-unused-vars */
import Steps from "./components/Steps";
import Footer from "./components/Footer";
import FirstStep from "./components/FirstStep";
import { useRef, useState } from "react";
import useSteps from "./hooks/useSteps";

function App() {
  const currentRef = useRef(null);
  const { currentStep: steps } = useSteps();
  const [step, changeStep] = useState(2);
  const submit = () => {
    const data = new FormData(currentRef.current);
    const val = Object.fromEntries(data.entries());
  };

  return (
    <>
      <main className="font-Medium  md:px-2 md:py-2 m-auto flex flex-col md:flex-row  relative bg-white rounded-lg inset-0 max-w-5xl flex-1">
        <Steps step={step} />
        <section className=" flex-1 px-3 md:px-14 lg:px-18 md:pt-10 bg-ligthBlue md:bg-white w-fit">
          <div className="flex lg:max-w-3xl flex-col justify-between h-full">
            {/* {CurForm} */}
            <FirstStep />
            <Footer onClick={changeStep} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

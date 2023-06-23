/* eslint-disable no-unused-vars */
import Steps from "./components/Steps";
import Footer from "./components/Footer";
import FirstStep from "./components/FirstStep";
import { useRef, useState } from "react";

function App() {
  const currentRef = useRef(null);
  const [steps, setStep] = useState(0);
  const submit = () => {
    const data = new FormData(currentRef.current);
    const val = Object.fromEntries(data.entries());
  };
  const changeStep = () => {
    setStep((prev) => (prev >= 3 ? 0 : prev + 1));
    console.log("Clicked", steps);
  };
  return (
    <>
      <main className="font-Medium  md:px-2 md:py-2 m-auto flex flex-col md:flex-row  relative bg-white rounded-lg inset-0 max-w-5xl flex-1">
        <Steps step={steps} />
        <section className=" flex-1 px-3 md:px-14 lg:px-18 md:pt-10 bg-ligthBlue md:bg-white w-fit">
          <div className="flex lg:max-w-3xl flex-col justify-between h-full">
            <FirstStep onSubmit={submit} ref={currentRef} />
            <Footer onClick={changeStep} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

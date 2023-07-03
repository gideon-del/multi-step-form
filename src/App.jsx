/* eslint-disable no-unused-vars */
import Steps from "./components/Steps";
import Footer from "./components/Footer";
import { useRef } from "react";
import { usePlan } from "./context/PlanContext";
import Complete from "./components/Complete";

function App() {
  const currentRef = useRef(null);
  const { currentStep, error, completed } = usePlan();
  const submit = () => {
    if (!currentStep.validate) return;
    currentStep.validate(currentRef.current);
  };
  const CurForm = currentStep.component;
  return (
    <>
      <main className="font-Medium  md:px-2 md:py-2 m-auto flex flex-col md:flex-row  relative bg-white rounded-lg inset-0 max-w-5xl flex-1 min-h-screen min-h-0  ">
        <Steps />
        <section className=" flex-1 px-3 md:px-14 lg:px-18 md:pt-10 bg-ligthBlue md:bg-white w-fit flex">
          <div className="flex lg:max-w-3xl flex-col justify-between  flex-1 ">
            {completed ? (
              <Complete />
            ) : (
              <>
                {currentStep.ref ? <CurForm ref={currentRef} /> : <CurForm />}
                {error.trim().length !== 0 && (
                  <p className="text-center text-red-500 fotn-Bold">{error}</p>
                )}
              </>
            )}
            {!completed && <Footer OnClick={submit} />}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

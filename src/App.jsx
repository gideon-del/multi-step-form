import { useState } from "react";
import bgDesk from "./assets/images/bg-sidebar-desktop.svg";
import bgMob from "./assets/images/bg-sidebar-mobile.svg";
import { firstInputs } from "./data";
import Inputs from "./components/Inputs";
import { steps } from "./data";

function App() {
  const [cuurentStep, setCurrentStep] = useState(0);
  return (
    <>
      <main className="font-Medium  lg:px-5 lg:py-5 mx-auto flex flex-col md:flex-row min-h-screen relative inset-0">
        <section className="stack">
          <picture>
            <source srcSet={bgMob} media=" (max-width:768px) " />
            <img
              src={bgDesk}
              className="w-full md:h-full object-cover   md:rounded-lg"
            />
          </picture>
          <section className=" md:pt-10 flex gap-5 items-center justify-center md:flex-col md:justify-start md:gap-10 md:items-start md:pl-7">
            {steps.map((step, i) => (
              <div className="flex gap-4  items-center justify-start cursor-pointer">
                <span
                  className={`${
                    i === cuurentStep
                      ? "bg-ligthBlue"
                      : "border-white border text-white"
                  } md:text-2xl p-6 w-8 h-8 rounded-full  flex items-center justify-center transition`}
                >
                  {i + 1}
                </span>
                <div className="hidden md:flex md:flex-col">
                  <p
                    className="font-Regular text-ligthGray uppercase
                "
                  >
                    Step {i + 1}
                  </p>
                  <p className="font-Bold uppercase text-white text-lg">
                    {step.title}
                  </p>
                </div>
              </div>
            ))}
            {/* <div className="flex gap-4 px-10 items-center justify-start ">
              <span className="bg-ligthBlue md:text-2xl p-6 w-8 h-8 rounded-full  flex items-center justify-center">
                1
              </span>
              <div>
                <p
                  className="font-Regular text-ligthGray uppercase
                "
                >
                  Step 1
                </p>
                <p className="font-Bold uppercase text-white text-lg">
                  Your info
                </p>
              </div>
            </div>
            <div className="flex gap-4 px-10 items-center justify-start ">
              <span className="border border-white text-white md:text-2xl p-6 w-8 h-8 rounded-full  flex items-center justify-center">
                2
              </span>
              <div>
                <p
                  className="font-Regular text-ligthGray uppercase
                "
                >
                  Step 2
                </p>
                <p className="font-Bold uppercase text-white text-lg">
                  select plan
                </p>
              </div>
            </div>
            <div className="flex gap-4 px-10 items-center justify-start ">
              <span className="border border-white text-white md:text-2xl p-6 w-8 h-8 rounded-full  flex items-center justify-center">
                3
              </span>
              <div>
                <p
                  className="font-Regular text-ligthGray uppercase
                "
                >
                  Step 3
                </p>
                <p className="font-Bold uppercase text-white text-lg">
                  Add-ons
                </p>
              </div>
            </div>
            <div className="flex gap-4 px-10 items-center justify-start ">
              <span className="border border-white text-white md:text-2xl p-6 w-8 h-8 rounded-full  flex items-center justify-center">
                4
              </span>
              <div>
                <p
                  className="font-Regular text-ligthGray uppercase
                "
                >
                  Step 4
                </p>
                <p className="font-Bold uppercase text-white text-lg">
                  summary
                </p>
              </div>
            </div> */}
          </section>
        </section>
        <section className=" flex-1 px-6 md:px-14 lg:px-28 md:pt-10 bg-ligthBlue md:bg-white">
          <div className="lg:max-w-xl md:h-full flex flex-col bg-white px-4 py-3 w-full rounded-lg relative -top-10">
            <h1 className="font-Bold text-marineBlue text-xl md:text-4xl">
              Personal info
            </h1>
            <p className="text-coolGray font-Regular md:mt-3 mt-1">
              Please provide your name, email address, and phone number
            </p>
            <form className="flex flex-col md:gap-5 gap-3 md:mt-10 mt-3 flex-1">
              {firstInputs.map((input) => (
                <Inputs key={input.title} {...input} />
              ))}
            </form>
          </div>
        </section>
        <div className="sticky  right-4 flex justify-end self-end">
          <button className="bg-marineBlue font-Bold text-white px-6 py-3 after:transition-all after:duration-300 after:ease-in-out rounded-md ml-auto  mt-3 mb-2 after:bg-white after:absolute after:inset-0 after:opacity-0 hover:after:opacity-40">
            Next Step
          </button>
        </div>
      </main>
    </>
  );
}

export default App;

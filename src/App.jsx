import { useState } from "react";
import bgDesk from "./assets/images/bg-sidebar-desktop.svg";
import bgMob from "./assets/images/bg-sidebar-mobile.svg";
import { steps } from "./data";
import acrade from "./assets/images/icon-arcade.svg";
import FirstStep from "./components/FirstStep";
function App() {
  const [cuurentStep, setCurrentStep] = useState(1);
  return (
    <>
      <main className="font-Medium  lg:px-2 lg:py-2 m-auto flex flex-col md:flex-row  relative bg-white rounded-lg inset-0 max-w-7xl w-fit">
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
          </section>
        </section>
        <section className=" flex-1 px-6 md:px-14 lg:px-28 md:pt-10 bg-ligthBlue md:bg-white">
          <section className="flex lg:max-w-3xl flex-col justify-between h-full">
            {/* <div className=" md:h-full flex flex-col bg-white px-4 py-3 w-full rounded-lg relative -top-10">
              <h1 className="font-Bold text-marineBlue text-xl md:text-4xl">
                Select your Plan
              </h1>
              <p className="text-coolGray font-Regular md:mt-3 mt-1">
                You have the option of monthly or yearly billing
              </p>
              <form className="flex  md:gap-5 gap-3 md:mt-10 mt-3 ">
                <div className="pr-20 pl-5 aspect-square border-coolGray border w-fit py-6 rounded-lg">
                  <img src={acrade} />
                  <h1 className="flex flex-col gap-3 mt-9">
                    {" "}
                    Acrade <span>$9/mo</span>
                  </h1>
                </div>
                <div className="pr-20 pl-5 aspect-square border-coolGray border w-fit py-6 rounded-lg">
                  <img src={acrade} />
                  <h1 className="flex flex-col gap-3 mt-9">
                    {" "}
                    Acrade <span>$9/mo</span>
                  </h1>
                </div>
                <div className="pr-20 pl-5 aspect-square border-coolGray border w-fit py-6 rounded-lg">
                  <img src={acrade} />
                  <h1 className="flex flex-col gap-3 mt-9">
                    {" "}
                    Acrade <span>$9/mo</span>
                  </h1>
                </div>
              </form>
            </div> */}
            <FirstStep />
            <div className=" flex justify-between  items-center">
              <button className="text-coolGray">Go Back</button>
              <button className="bg-marineBlue font-Bold text-white px-6 py-3 after:transition-all after:duration-300 after:ease-in-out relative rounded-md ml-auto  mt-3 mb-2 after:bg-white after:absolute after:inset-0 after:opacity-0 hover:after:opacity-40">
                Next Step
              </button>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;

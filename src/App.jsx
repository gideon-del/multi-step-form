import { useState } from "react";
import bgDesk from "./assets/images/bg-sidebar-desktop.svg";
import bgMob from "./assets/images/bg-sidebar-mobile.svg";
const steps = [
  {
    title: "your info",
    complete: false,
  },
  {
    title: "select plan",
    complete: false,
  },
  {
    title: "add-ons",
    complete: false,
  },
  {
    title: "summary",
    complete: false,
  },
];
function App() {
  const [cuurentStep, setCurrentStep] = useState(0);
  return (
    <>
      <main className="font-Medium  lg:px-5 lg:py-5 mx-auto flex flex-col md:flex-row min-h-screen">
        <section className="stack">
          <picture>
            <source srcSet={bgMob} media=" (max-width:768px) " />
            <img
              src={bgDesk}
              className="w-full md:h-full object-cover   md:rounded-lg"
            />
          </picture>
          <section className=" md:pt-10 flex gap-5 items-center justify-center md:flex-col md:justify-start md:gap-10 md:items-start">
            {steps.map((step, i) => (
              <div className="flex gap-4  items-center justify-start ">
                <span
                  className={`${
                    i === cuurentStep
                      ? "bg-ligthBlue"
                      : "border-white border text-white"
                  } md:text-2xl p-6 w-8 h-8 rounded-full  flex items-center justify-center`}
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
        <section className="flex-1 bg-blue"></section>
      </main>
    </>
  );
}

export default App;

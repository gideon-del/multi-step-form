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
          <section className=" md:pt-10 flex gap-5 items-center justify-center md:flex-col md:justify-start md:gap-10 md:items-start md:pl-7">
            {steps.map((step, i) => (
              <div className="flex gap-4  items-center justify-start cursor-pointer">
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
        <section className=" flex-1 px-10 md:px-14 lg:px-28 md:pt-10">
          <div className="max-w-xl md:h-full flex flex-col">
            <h1 className="font-Bold text-marineBlue text-xl md:text-4xl">
              Personal info
            </h1>
            <p className="text-coolGray font-Regular mt-3">
              Please provide your name, email address, and phone number
            </p>
            <form className="flex flex-col gap-5 mt-10 flex-1">
              <div className="flex flex-col gap-3 ">
                <label htmlFor="name" className="capitalize text-marineBlue">
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g Stephen King"
                  className="border border-coolGray max-w-xl px-4 py-2 rounded-lg focus-within:outline-none focus-within:border-0 focus-within:border-b focus-within:rounded-none"
                />
              </div>
              <div className="flex flex-col  gap-3">
                <label htmlFor="email" className="capitalize text-marineBlue">
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g stephenking@lorem.com"
                  className="border border-coolGray 
                  px-4 py-2 rounded-lg focus-within:outline-none focus-within:border-0 focus-within:border-b focus-within:rounded-none"
                />
              </div>
              <div className="flex flex-col  gap-3">
                <label htmlFor="phone" className="capitalize text-marineBlue">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="e.g +1 234 567 890"
                  className="border border-coolGray max-w-xl px-4 py-2 rounded-lg focus-within:outline-none focus-within:border-0 focus-within:border-b focus-within:rounded-none"
                />
              </div>
              <button className="bg-marineBlue font-Bold text-white px-4 py-2 rounded-md ml-auto mt-auto">
                Next Step
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

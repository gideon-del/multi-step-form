import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import Steps from "./components/Steps";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <main className="font-Medium  md:px-2 md:py-2 m-auto flex flex-col md:flex-row  relative bg-white rounded-lg inset-0 max-w-5xl flex-1">
        <Steps />
        <section className=" flex-1 px-6 md:px-14 lg:px-18 md:pt-10 bg-ligthBlue md:bg-white">
          <section className="flex lg:max-w-3xl flex-col justify-between h-full">
            <div className=" md:h-full flex flex-col bg-white px-4 py-3 w-full rounded-lg relative -top-10">
              <h1 className="font-Bold text-marineBlue text-xl md:text-4xl">
                Pick add-ons
              </h1>
              <p className="text-coolGray font-Regular md:mt-3 mt-1">
                Add-ons help enhance your gaming experience.
              </p>
              <form className="flex flex-col md:gap-5 gap-3 md:mt-10 mt-3 ">
                <div className="flex justify-between items-center border border-coolGray px-4 py-4">
                  <div className="flex">
                    <input type="checkbox" name="addOn" id="online" />
                    <label htmlFor="online" className="flex flex-col">
                      Online service <span>Access to multiplayer games</span>
                    </label>
                  </div>
                  <p>+$1/mo</p>
                </div>
              </form>
            </div>

            <Footer />
          </section>
        </section>
      </main>
    </>
  );
}

export default App;

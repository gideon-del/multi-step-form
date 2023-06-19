import Steps from "./components/Steps";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <main className="font-Medium  md:px-2 md:py-2 m-auto flex flex-col md:flex-row  relative bg-white rounded-lg inset-0 max-w-5xl flex-1">
        <Steps />
        <section className=" flex-1 px-3 md:px-14 lg:px-18 md:pt-10 bg-ligthBlue md:bg-white w-fit">
          <section className="flex lg:max-w-3xl flex-col justify-between h-full">
            <div className=" md:h-full flex flex-col bg-white px-4 py-3 w-full rounded-lg relative -top-10">
              <h1 className="font-Bold text-marineBlue text-xl md:text-4xl">
                Finishing up
              </h1>
              <p className="text-coolGray font-Regular md:mt-3 mt-1">
                Double check everything looks OK before confirming.
              </p>
              <div className="bg-ligthBlue">
                <div className=" font-Bold text-marineBlue flex justify-between items-center border-b border-b-coolGray pb-4">
                  <p className="flex flex-col">
                    Arcade(Monthly){" "}
                    <span className="underline text-purplishBlue font-Regular">
                      Change
                    </span>
                  </p>
                  <p className="">$9/mo</p>
                </div>
                <div></div>
              </div>
            </div>

            <Footer />
          </section>
        </section>
      </main>
    </>
  );
}

export default App;

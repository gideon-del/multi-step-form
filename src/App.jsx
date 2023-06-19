import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import Steps from "./components/Steps";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <main className="font-Medium  md:px-2 md:py-2 m-auto flex flex-col md:flex-row  relative bg-white rounded-lg inset-0 max-w-7xl w-fit">
        <Steps />
        <section className=" flex-1 px-6 md:px-14 lg:px-28 md:pt-10 bg-ligthBlue md:bg-white">
          <section className="flex lg:max-w-3xl flex-col justify-between h-full">
            <SecondStep />
            <Footer />
          </section>
        </section>
      </main>
    </>
  );
}

export default App;

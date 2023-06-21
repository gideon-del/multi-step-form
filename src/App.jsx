import Steps from "./components/Steps";
import Footer from "./components/Footer";
import FourthStep from "./components/FourthStep";
function App() {
  return (
    <>
      <main className="font-Medium  md:px-2 md:py-2 m-auto flex flex-col md:flex-row  relative bg-white rounded-lg inset-0 max-w-5xl flex-1">
        <Steps />
        <section className=" flex-1 px-3 md:px-14 lg:px-18 md:pt-10 bg-ligthBlue md:bg-white w-fit">
          <section className="flex lg:max-w-3xl flex-col justify-between h-full">
            <FourthStep />
            <Footer />
          </section>
        </section>
      </main>
    </>
  );
}

export default App;

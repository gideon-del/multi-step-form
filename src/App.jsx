import Steps from "./components/Steps";
import Footer from "./components/Footer";
import FirstStep from "./components/FirstStep";

function App() {
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
  };
  return (
    <>
      <main className="font-Medium  md:px-2 md:py-2 m-auto flex flex-col md:flex-row  relative bg-white rounded-lg inset-0 max-w-5xl flex-1">
        <Steps />
        <section className=" flex-1 px-3 md:px-14 lg:px-18 md:pt-10 bg-ligthBlue md:bg-white w-fit">
          <div className="flex lg:max-w-3xl flex-col justify-between h-full">
            <FirstStep onSubmit={submit} />
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

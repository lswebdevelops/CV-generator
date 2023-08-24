import "./App.css";
import Footer from "./components/Footer";
import Display from "./components/display/Display";
import Load from "./components/load/Load";

function App() {
  return (
    <>
      <h1 className="title">CV GENERATOR</h1>
      <div className="container">
        <Load />
       
        <Display />
      </div>
      <Footer />
    </>
  );
}

export default App;

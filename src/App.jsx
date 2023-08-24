import "./App.css";
import Display from "./components/display/Display";
import Load from "./components/load/Load";

function App() {
  return (
    <div className="container">
      <div>
        <Load />
      </div>
      <div>
        <Display />
      </div>
    </div>
  );
}

export default App;

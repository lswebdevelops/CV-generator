import "./styles/App.css";
import Footer from "./components/Footer";

import DisplayHeader from "./components/display//DisplayHeader";
import DisplayEducation from "./components/display//DisplayEducation";
import DisplayExperience from "./components/display//DisplayExperience";

import LoadNavbar from "./components/load/LoadNavbar";
import LoadPersonalDetails from "./components/load/LoadPersonalDetails";
import LoadEducation from "./components/load/LoadEducation";
import LoadExperience from "./components/load/LoadExperience";
function App() {
  return (
    <>
      <h1 className="title">CV GENERATOR</h1>
      <div className="container">
        <div className="load-container">
          <LoadNavbar />
          <LoadPersonalDetails />
          <LoadEducation />
          <LoadExperience />
        </div>
        <div className="display-container">
    <DisplayHeader />
    <DisplayEducation />
    <DisplayExperience />
  </div>;
      </div>
      <Footer />
    </>
  );
}

export default App;

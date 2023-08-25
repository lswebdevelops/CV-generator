import "./styles/App.css";
import Footer from "./components/Footer";
import DisplayPersonDetails from "./components/display/DisplayPersonDetails";
import DisplayEducation from "./components/display//DisplayEducation";
import DisplayExperience from "./components/display//DisplayExperience";
import LoadNavbar from "./components/load/LoadNavbar";
import LoadPersonalDetails from "./components/load/LoadPersonalDetails";
import LoadEducation from "./components/load/LoadEducation";
import LoadExperience from "./components/load/LoadExperience";
import { useState } from "react";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "Mario Meyers",
    email: "mario_meyears@email.com",
    phone: "+13-2342-234234",
    address: "Santa Catarina, Brazil",
  });

  // Function to update personal details
  const updatePersonalDetails = (newDetails) => {
    setPersonalDetails(newDetails);
  };

  return (
    <>
      <h1 className="title">CV GENERATOR</h1>
      <div className="container">
        <div className="load-container">
          <LoadNavbar />
          <LoadPersonalDetails
            updateDetails={updatePersonalDetails}
            personalDetails={personalDetails}
          />
          <LoadEducation />
          <LoadExperience />
        </div>
        <div className="display-container">
          <DisplayPersonDetails personalDetails={personalDetails} />
          <DisplayEducation />
          <DisplayExperience />
        </div>
        ;
      </div>
      <Footer />
    </>
  );
}

export default App;

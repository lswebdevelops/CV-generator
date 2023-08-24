import LoadNavbar from "./LoadNavbar";
import "../../styles/Load.css";
import LoadPersonalDetails from "./LoadPersonalDetails";
import LoadEducation from "./LoadEducation";
import LoadExperience from "./LoadExperience";

const Load = () => {
  return (
    <div className="load-container">
      <LoadNavbar />
      <LoadPersonalDetails />
      <LoadEducation />
      <LoadExperience />
    </div>
  );
};

export default Load;

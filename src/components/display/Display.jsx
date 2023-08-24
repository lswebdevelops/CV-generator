import "../../styles/Display.css";
import DisplayHeader from "./DisplayHeader";
import DisplayEducation from "./DisplayEducation";
import DisplayExperience from "./DisplayExperience";

const Display = () => {
  return <div className="display-container">
    <DisplayHeader />
    <DisplayEducation />
    <DisplayExperience />
  </div>;
};

export default Display;

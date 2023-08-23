import LoadNavbar from "./LoadNavbar";
import '../../styles/Load.css'
import LoadPersonalDetails from "./LoadPersonalDetails";

const Load = () => {
  return (
    <div className="load-container">       
      <LoadNavbar />     
      <LoadPersonalDetails />
    </div>
  );
}

export default Load;

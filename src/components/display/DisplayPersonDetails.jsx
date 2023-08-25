import { FaPhoneAlt } from "react-icons/fa";
import { FaSignsPost } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const DisplayPersonDetails = ({ personalDetails }) => {
  
  return (
    <header className="header-display">
      <h1 className="h1-header">{personalDetails.name}</h1>
      <div className="div-header">
        <p className="header-para"><HiMail /> {personalDetails.email}</p>
        <p className="header-para"><FaPhoneAlt /> {personalDetails.phone}</p>
        <p className="header-para"><FaSignsPost /> {personalDetails.address}</p>
      </div>
    </header>
  );
};

export default DisplayPersonDetails;
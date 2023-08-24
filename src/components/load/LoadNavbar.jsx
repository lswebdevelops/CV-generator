import { HiTrash } from "react-icons/hi";
import { AiOutlineSave } from "react-icons/ai";

const LoadNavbar = () => {

    return(
        <div  className="load-navbar"> 
           <nav className="nav-load-navbar">
            <button><HiTrash /> Clear Resume</button>
            <button><AiOutlineSave /> Save Resume</button>
           </nav>
        </div>
    )
}
export default LoadNavbar;
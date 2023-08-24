import { HiTrash , HiCloudDownload } from "react-icons/hi";

const LoadNavbar = () => {

    return(
        <div  className="load-navbar"> 
           <nav className="nav-load-navbar">
            <button><HiTrash /> Clear Resume</button>
            <button><HiCloudDownload /> Load Example</button>
           </nav>
        </div>
    )
}
export default LoadNavbar;
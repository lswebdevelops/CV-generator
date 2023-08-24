import "../styles/Footer.css";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    const thisYear = new Date().getFullYear().toString();
    setYear(thisYear);
  }, []);

  return (
    <footer>
      <p>
        &copy;&nbsp;
        <span>{year}</span>&nbsp;LS-WEB Development{" "}
        <a
          href="https://github.com/lswebdevelops"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
      </p>
    </footer>
  );
}

export default Footer;

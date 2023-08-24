import { useState } from "react";

const DisplayExperience = () => {
  const [company, setCompany] = useState("Umbrella Inc");
  const [position, setPosition] = useState("Web Developer");
  const [description, setDescription] = useState(
    "I used to work in a reputable company (Umbrella Inc) for several years, where I honed my skills in creating intuitive and visually appealing user interfaces using HTML, CSS, and JavaScript. During my time there, I paid meticulous attention to detail, ensuring that websites were not only aesthetically pleasing but also responsive and user-friendly."
  );
  const [startDate, setStartDate] = useState("12/2018");
  const [endDate, setEndDate] = useState("05/2022");
  const [address, setAddress] = useState("Berlin, Germany");
  return (
    <section className="experience-display">
      <h1>Profissional Experience</h1>
      <div className="div-experience-container">
        <div className="div-experience">
          <p className="experience-date">
            {startDate} - {endDate}
          </p>
          <p>{address}</p>
        </div>
        <div className="div-experience">
          <p className="experience-company">{company}</p>
          <p>{position}</p>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default DisplayExperience;

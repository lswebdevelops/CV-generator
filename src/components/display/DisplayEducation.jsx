import { useState } from "react";

const DisplayEducation = () => {
  const [university, setUniversity] = useState("Umbrella Academy");
  const [course, setCourse] = useState("Bachelor in Economics");
  const [address, setAddress] = useState("New York City, US");
  const [startDate, setStartDate] = useState("12/2020");
  const [endDate, setEndDate] = useState("present");
  return (
    <section className="education-display">
      <h1>Education</h1>
      <div className="div-education-container">
      <div className="div-education1">
        <p className="education-date">
          {startDate} - {endDate}
        </p>
        <p>{address}</p>
      </div>
      <div className="div-education2">        
        <p className="education-university">{university}</p>
        <p>{course}</p>
      </div>

      </div>
    </section>
  );
};

export default DisplayEducation;

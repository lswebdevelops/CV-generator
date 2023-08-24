const LoadExperience = () => {
  return (
    <>
    <section className="load-experience">
      <h1>Experience</h1>
      <input  className="company-name"  type="name"  id="company-name" placeholder="Company Name" />
      <label htmlFor="company-start-year">Start:</label>
      <input type="date" id="company-start-year" />
      <label htmlFor="company-end-year">End:</label>
      <input type="date" id="company-end-year" />
    </section>
    <div className="plus-experience-container">
            <button className="button-plus-experience">+ Experience</button>
            </div>

    </>
  );
};

export default LoadExperience;

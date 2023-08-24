const LoadEducation = ()=> {
    return(
      <div>
          <section className="load-education" >
            <h1>Education</h1>
            <input  className="university-input" type="text" id="university" placeholder="University Name" />
            <input  type="text" id="Course Name"  placeholder="course"/>
            <label htmlFor="start-year">Start:</label>
            <input type="date" id="start-year"/>
            <label htmlFor="end-year">End:</label>
            <input type="date" id="end-year" />
        </section>
        
            <div className="plus-education-container">
            <button className="button-plus-education">+ Education</button>
            </div>

      </div>
    )
}

export default LoadEducation;

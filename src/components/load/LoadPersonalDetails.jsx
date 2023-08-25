import { GoPerson } from "react-icons/go";

const LoadPersonalDetails = ({ updateDetails, personalDetails}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newDetails = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      
    }
    updateDetails(newDetails)
  }

  return (
   <>
    <section className="load-personalDetails">
      <h1><GoPerson /> Personal Details</h1>
      <form onSubmit={handleSubmit}>
      <h2>Full Name</h2>
      <label htmlFor="name"></label>
          <input
            type="text"
            defaultValue="" // Clear the defaultValue
            name="name"
            placeholder="Type your name"
          />
          <h2>Email</h2>
          <label htmlFor="email"></label>
          <input
            type="email"
            defaultValue="" // Clear the defaultValue
            name="email"
            placeholder="Type your email"
          />
          <h2>Phone Number</h2>
          <label htmlFor="phone"></label>
          <input
            type="text"
            defaultValue="" // Clear the defaultValue
            name="phone"
            placeholder="Type your phone number"
          />
          <h2>Address</h2>
          <label htmlFor="address"></label>
          <input
            type="text"
            defaultValue="" // Clear the defaultValue
            name="address"
            placeholder="Type your address"
          />
          <div className="plus-person-container">
      <button type="submit" className="button-add-person">
            + Person
          </button>
    </div>

        </form>
    </section>
   
    </>

  );
};
export default LoadPersonalDetails;


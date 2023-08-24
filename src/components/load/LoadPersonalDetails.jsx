

import { GoPerson } from "react-icons/go";
const LoadPersonalDetails = () => {
  return (
   <>
    <section className="load-personalDetails">
      <h1><GoPerson /> Personal Details</h1>
      <h2>Full Name</h2>
      <input type="name" id="name" placeholder="Type your name" />
      <label htmlFor="name"></label>
      <h2>Email</h2>
      <input type="email" id="email" placeholder="Type your email" />
      <label htmlFor="email"></label>
      <h2>Phone Number</h2>
      <input type="phone" id="phone" placeholder="Type your phone number" />
      <label htmlFor="phone"></label>
      <h2>Address</h2>
      <input type="address" id="address" placeholder="Type your address" />
      <label htmlFor="address"></label>
    </section>
    <div className="plus-person-container">
    <button className="button-add-person">+ Person</button>
    </div>
    </>

  );
};
export default LoadPersonalDetails;

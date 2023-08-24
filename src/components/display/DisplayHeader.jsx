import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSignsPost } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

useState;
const DisplayHeader = () => {
  const [name, setName] = useState("Myown Name Meyers");
  const [email, setEmail] = useState("my_name_meyears@email.com");
  const [phone, setPhone] = useState("+13-2342-234234");
  const [address, setAddress] = useState("Santa Catarina, Brazil");

  return (
    <header className="header-display">
      <h1 className="h1-header">{name}</h1>
      <div className="div-header">
        <p className="header-para"><HiMail /> {email}</p>
        <p className="header-para"><FaPhoneAlt /> {phone}</p>
        <p className="header-para"><FaSignsPost /> {address}</p>
      </div>
    </header>
  );
};

export default DisplayHeader;

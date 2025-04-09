import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import barangayIcon from "../../assets/Icon.jfif";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="navbar">
      <div className="nav-container">
        <div style={{ display: "flex", alignItems: "center" }}>
      <img src={barangayIcon} alt="Barangay Clearance" className="barangay-image"  style={{width: "60px"}}/>
        <h2 className="Barangay" style={{ color: "orange"}} >Barangay Sabang</h2>
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Certification" className="nav-link">Certification</Link>
          </li>
          <li className="nav-item">
            <Link to="/Process" className="nav-link">Request Status</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">Contact</Link>
          </li>
          <Link to="/login">
                <button className="btn">Log Out</button>
            </Link>
        </ul>
      </div>
    </nav>
   
    </>
  );
};

export default Navbar;

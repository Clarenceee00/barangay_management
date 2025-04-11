import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import barangayIcon from "../../assets/Icon.jfif";

const NavbarLanding = () => {
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
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <Link to="/login">
                <button className="btn">Log In</button>
            </Link>
        </ul>
      </div>
    </nav>
   
    </>
  );
};

export default NavbarLanding;

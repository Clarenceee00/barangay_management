import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src="" alt="" />
        <Link to="/" className="nav-logo">Barangay Sabang</Link>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          {/*<li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li> */}
          
          <li className="nav-item">
            <Link to="/Certification" className="nav-link">Certification</Link>
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
  );
};

export default Navbar;

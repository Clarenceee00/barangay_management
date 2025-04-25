import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import barangayIcon from "../../assets/ICONNNSS.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      // Optional: Clear any auth tokens or session data here
      navigate("/");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={barangayIcon} alt="Barangay Clearance" className="barangay-image" style={{ width: "70px" }} />
          <h2 className="Barangay" style={{ color: "orange" }}>Barangay Sabang</h2>
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
          <li className="nav-item">
            <button className="btn" onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

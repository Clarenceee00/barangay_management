import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import barangayIcon from "../../assets/ICONNNSS.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      navigate("/");
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={barangayIcon} alt="Barangay Clearance" className="barangay-image" style={{ width: "70px" }} />
          <h2 className="Barangay" style={{ color: "#ffffff" }}>Barangay Sabang</h2>
        </div>
        <ul className="nav-menu">
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

          {/* Account dropdown positioned at the end */}
          <li className="nav-item dropdown" onClick={toggleDropdown}>
            <button className="nav-link dropdown-toggle">Account ▾</button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/EditProfile" className="dropdown-item">Edit Profile</Link>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>Log Out</button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

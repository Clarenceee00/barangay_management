import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import barangayIcon from "../../../assets/ICONNNSS.png";

// Icons
import { FaTachometerAlt, FaProjectDiagram, FaCertificate, FaUsers, FaUserTie, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Redirect to login page
  };

  return (
    <>
      <div className="sidebar">
        <img src={barangayIcon} alt="Barangay Clearance" className="barangay-image" style={{ width: "100px" }} />
        <h2>Barangay Sabang</h2>
        <ul>
          <li><Link to="/Dashboard"><FaTachometerAlt /> DashBoard Analytics</Link></li>
          <li><Link to="/project"><FaProjectDiagram /> Project</Link></li>
          <li><Link to="/barangaycert"><FaCertificate /> Barangay Certificate</Link></li>
          <li><Link to="/ResidentInformationTable"><FaUsers /> Resident Information</Link></li>
          <li><Link to="/official"><FaUserTie /> Barangay Officer</Link></li>
          <li><Link to="/addCertificate"><FaUserTie /> Add Certificate</Link></li>
      
        </ul>
        <div className="logout-btn-container">
          <button className="logout-btn" onClick={() => setShowLogoutModal(true)}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Are you sure you want to logout?</h3>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={handleLogout}>Yes, Logout</button>
              <button className="cancel-btn" onClick={() => setShowLogoutModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

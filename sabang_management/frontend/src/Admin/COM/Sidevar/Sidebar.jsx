import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import barangayIcon from "../../../assets/ICONNNSS.png";

// Importing icons
import { FaTachometerAlt, FaProjectDiagram, FaCertificate, FaUsers, FaUserTie } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={barangayIcon} alt="Barangay Clearance" className="barangay-image" style={{ width: "100px" }} />
      <h2>Barangay Sabang</h2>
      <ul>
        <li>
          <Link to="/Dashboard"><FaTachometerAlt style={{ marginRight: '5px' }} />DashBoard Analytics</Link>
        </li>
        <li>
          <Link to="/project"><FaProjectDiagram style={{ marginRight: '5px' }} />Project</Link>
        </li>
        <li>
          <Link to="/barangaycert"><FaCertificate style={{ marginRight: '5px' }} />Barangay Certificate</Link>
        </li>
        <li>
          <Link to="/ResidentInformationTable"><FaUsers style={{ marginRight: '5px' }} />Resident Information</Link>
        </li>
        <li>
          <Link to="/official"><FaUserTie style={{ marginRight: '8px' }} />Barangay Officer</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

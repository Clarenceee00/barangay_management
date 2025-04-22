import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; 
import barangayIcon from "../../../assets/ICONNNSS.png";


const Sidebar = () => {
  return (
    <div className="sidebar">

     <img src={barangayIcon} alt="Barangay Clearance" className="barangay-image"  style={{width: "100px"}}/>
      <h2>Barangay Sabang</h2>
      <ul>
         <li><Link to="/Dashboard">DashBoard Analytics</Link></li>
         <li><Link to="/project">Project</Link></li>
         <li><Link to="/barangaycert">Barangay Certificate</Link></li>
        <li><Link to="/ResidentInformationTable">Resident Information</Link></li>
        <li><Link to="/official">Barangay Officer</Link></li>
       
      </ul>
    </div>
  );
};

export default Sidebar;

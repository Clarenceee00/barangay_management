import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; 

const Sidebar = () => {
  return (
    <div className="sidebar">

      <img src="/src/assets/Icon.jfif" className="Icon" />
      <h2>Barangay Sabang</h2>
      <ul>
         <li><Link to="">DashBoard</Link></li>
       <li><Link to="/project">Project</Link></li>
        <li><Link to="">Resident Information</Link></li>
        <li><Link to="">Barangay Certificate</Link></li>
        <li><Link to="">Barangay Officer</Link></li>
       
      </ul>
    </div>
  );
};

export default Sidebar;

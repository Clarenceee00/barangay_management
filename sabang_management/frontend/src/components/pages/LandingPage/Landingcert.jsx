import React from 'react'
import { Link } from "react-router-dom";
import "../style/certificate.css";
import NavbarLanding from '../../Navbar/NavarLanding';




export const LandingCertification = () => {
  return (
    <>
    <NavbarLanding/>
    <div className="modaloverlay" >
      <div className="modalcontent">
        <h2 className="modaltitle">CERTIFICATE REQUEST</h2>
        <div className="buttons">
         <Link to="/login"> <button className="docbutton">Barangay Clearance</button></Link>
         <Link to= "/login"> <button className="docbutton">Indigency Scholarship</button> </Link>
         <Link to= "/login"><button className="docbutton">Certificate of Residency</button></Link>
         <Link to= "/login"><button className="docbutton">Job Seeker & Oath</button></Link>
         <Link to= "/login"><button className="docbutton">Barangay Indigency</button></Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default LandingCertification;
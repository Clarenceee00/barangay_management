import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import "./style/certificate.css";




export const Certification = () => {
  return (
    <>
    <Navbar/>
    <div className="modaloverlay" >
      <div className="modalcontent">
        <h2 className="modaltitle">DOCUMENT REQUEST</h2>
        <div className="buttons">
         <Link to="/barangay-clearance"> <button className="docbutton">Barangay Clearance</button></Link>
         <Link to= "/scholarship-form"> <button className="docbutton">Barangay Indigency</button> </Link>
         <Link to= "/residency-form"><button className="docbutton">Certificate of Residency</button></Link>
         <Link to= "/job-seeker-oath"><button className="docbutton">Job Seeker & Oath</button></Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Certification;
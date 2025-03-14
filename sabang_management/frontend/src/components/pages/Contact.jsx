import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";

const ContactUs = () => {
    const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div className="about-container">
      <h1>Contact Us</h1>
     <h2>Hotline - 0912-32312-213123</h2>
      <h2>Face Book Page - Barangay sabang Horray</h2>
    </div>
    </>
  )
}

export default ContactUs
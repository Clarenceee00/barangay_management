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
     <h2>Mobile - 0975 308 6265</h2>
      <h2>Face Book Page - Kapitan Jango Nicolas </h2>
      <h2>Gmail - teamjango2023@gmail.com</h2>
    </div>
    </>
  )
}

export default ContactUs
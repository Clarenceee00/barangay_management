import React from 'react';
import { useNavigate } from "react-router-dom";
import NavbarLanding from '../Navbar/navbar';
import clarenceImg from '../../assets/clarence.jfif';

const barangayMembers = [
    {
        name: "Barangay Captain",
        position: "Barangay Captain",
        contact: "0975 123 4567",
        address: "Purok 1, Barangay XYZ",
        image: clarenceImg,
    },
    {
        name: "Maria Santos",
        position: "Kagawad",
        contact: "0975 765 4321",
        address: "Purok 3, Barangay XYZ",
        image: clarenceImg,// Replace with actual image path
    },
    {
        name: "Jose Rizal",
        position: "SK Chairman",
        contact: "0975 111 2222",
        address: "Purok 5, Barangay XYZ	",
        image: clarenceImg // Replace with actual image path
    }
];

const ContactUs = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <NavbarLanding />
            <div className="about-container">
                <h1>Contact Us</h1>
                <h2>Mobile: <a href="tel:+09753086265">0975 308 6265</a></h2>
                <h2>Facebook Page: <a href="https://www.facebook.com/KapitanJangoNicolas" target="_blank" rel="noopener noreferrer">Kapitan Jango Nicolas</a></h2>
                <h2>Email: <a href="mailto:teamjango2023@gmail.com">teamjango2023@gmail.com</a></h2>
                
                <div className="members-container">
                    {barangayMembers.map((member, index) => (
                        <div className="member-box" key={index}>
                            <img src={member.image} alt={member.name} className="member-image" />
                            <h3>{member.name}</h3>
                            <p>Position: {member.position}</p>
                            <p>Contact: {member.contact}</p>
                            <p>Address: {member.address}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>
                {`
                    .about-container {
                        padding: 20px;
                    }

                    .members-container {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 20px;
                    }

                    .member-box {
                        border: 1px solid #ccc;
                        border-radius: 8px;
                        padding: 15px;
                        text-align: center;
                        width: 300px; 
                        height: auto;
                    }

                    .member-image {
                        width: 50%;
                        height: auto;
                        border-radius: 10px;
                    }
                `}
            </style>
        </>
    );
}

export default ContactUs;

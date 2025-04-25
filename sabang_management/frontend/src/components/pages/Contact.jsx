import React from 'react';
import { useNavigate } from "react-router-dom";
import NavbarLanding from '../Navbar/navbar';
import clarenceImg from '../../assets/clarence.jfif';

const barangayMembers = [
    {
        name: "Juan Cruz",
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
          <div className="desktop-contact-container">
            <section className="desktop-contact-section">
              <h1>📞 Contact Us</h1>
              <p><strong>Mobile:</strong> <a href="tel:+09753086265">0975 308 6265</a></p>
              <p><strong>Facebook Page:</strong> <a href="https://www.facebook.com/KapitanJangoNicolas" target="_blank" rel="noopener noreferrer">Kapitan Jango Nicolas</a></p>
              <p><strong>Email:</strong> <a href="mailto:teamjango2023@gmail.com">teamjango2023@gmail.com</a></p>
            </section>
    
            <section>
              <h2 className="desktop-members-title">👥 Barangay Officials</h2>
              <div className="desktop-members-grid">
                {barangayMembers.map((member, index) => (
                  <div className="desktop-member-card" key={index}>
                    <img src={member.image} alt={member.name} className="desktop-member-img" />
                    <div className="desktop-member-info">
                      <h3>{member.name}</h3>
                      <p><strong>Position:</strong> {member.position}</p>
                      <p><strong>Contact:</strong> {member.contact}</p>
                      <p><strong>Address:</strong> {member.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
    
          <style>{`
            .desktop-contact-container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 60px 40px;
              font-family: 'Segoe UI', sans-serif;
              color: #333;
              background-color: #f9f9f9;
            }
    
            .desktop-contact-section {
              background: white;
              border-radius: 12px;
              padding: 30px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.08);
              margin-bottom: 50px;
            }
    
            .desktop-contact-section h1 {
              font-size: 2.5rem;
              margin-bottom: 20px;
            }
    
            .desktop-contact-section p {
              font-size: 1.1rem;
              margin: 10px 0;
            }
    
            .desktop-contact-section a {
              color: #007bff;
              text-decoration: none;
            }
    
            .desktop-contact-section a:hover {
              text-decoration: underline;
            }
    
            .desktop-members-title {
              font-size: 2rem;
              margin-bottom: 25px;
              text-align: center;
            }
    
            .desktop-members-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 30px;
            }
    
            .desktop-member-card {
              background: white;
              border-radius: 12px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.05);
              padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              transition: transform 0.2s ease;
            }
    
            .desktop-member-card:hover {
              transform: translateY(-5px);
            }
    
            .desktop-member-img {
              width: 130px;
              height: 130px;
              border-radius: 50%;
              object-fit: cover;
              margin-bottom: 15px;
            }
    
            .desktop-member-info h3 {
              font-size: 1.2rem;
              margin-bottom: 5px;
            }
    
            .desktop-member-info p {
              font-size: 0.95rem;
              margin: 4px 0;
            }
    
            @media (max-width: 1024px) {
              .desktop-members-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
    
            @media (max-width: 600px) {
              .desktop-members-grid {
                grid-template-columns: 1fr;
              }
    
              .desktop-contact-section h1 {
                font-size: 2rem;
              }
            }
          `}</style>
        </>
      );
    };

export default ContactUs;

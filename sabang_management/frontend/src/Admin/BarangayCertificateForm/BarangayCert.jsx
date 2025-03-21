import React, { useState } from 'react';
import Sidebar from '../COM/Sidevar/Sidebar';

const BarangayCert = () => {
    const [certificates, setCertificates] = useState([
      { id: 1, name: "Juan Dela Cruz", certificate: "Barangay Clearance", date: "March 20, 2025", status: "Pending", form: "Form 1" },
      { id: 2, name: "Maria Clara", certificate: "Indigency Scholarship", date: "March 18, 2025", status: "Ready to Pick Up", form: "Form 2" },
      { id: 3, name: "Jose Rizal", certificate: "Certificate of Residency", date: "March 15, 2025", status: "Pending", form: "Form 3" },
      { id: 4, name: "Andres Bonifacio", certificate: "Job Seeker & Oath", date: "March 14, 2025", status: "Pending", form: "Form 4" },
      { id: 5, name: "Emilio Aguinaldo", certificate: "Barangay Indigency", date: "March 12, 2025", status: "Ready to Pick Up", form: "Form 5" }
    ]);
  
    const toggleStatus = (id) => {
      setCertificates(certificates.map(cert => 
        cert.id === id ? { ...cert, status: cert.status === "Pending" ? "Ready to Pick Up" : "Pending" } : cert
      ));
    };
  
    return (
      <>
      <Sidebar />
      <div className="container">
        <h2>Listahan ng mga Kumuhang Certificate</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Pangalan</th>
              <th>Uri ng Certificate</th>
              <th>Petsa ng Pagtanggap</th>
              <th>Form</th>
              <th>Estado</th>
              <th>Aksyon</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert, index) => (
              <tr key={cert.id}>
                <td>{index + 1}</td>
                <td>{cert.name}</td>
                <td>{cert.certificate}</td>
                <td>{cert.date}</td>
                <td>{cert.form}</td>
                <td>{cert.status}</td>
                <td>
                  <button onClick={() => toggleStatus(cert.id)} className={cert.status === "Pending" ? "pending" : "ready"}>
                    {cert.status === "Pending" ? "Mark as Ready" : "Mark as Pending"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <style>
          {`
            .container {
              max-width: 800px;
              margin: auto;
              padding: 20px;
              background: #f9f9f9;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              text-align: center;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 10px;
              text-align: left;
            }
            th {
              background: #28a745;
              color: white;
            }
            tr:nth-child(even) {
              background: #f2f2f2;
            }
            button {
              padding: 5px 10px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              color: white;
            }
            .pending {
              background: red;
            }
            .ready {
              background: green;
            }
          `}
        </style>
      </div>
      </>
    );
  };



  

export default BarangayCert;
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
  
    const updateStatus = (id, newStatus) => {
      setCertificates(certificates.map(cert => 
        cert.id === id ? { ...cert, status: newStatus } : cert
      ));
    };
  
    return (
      <>
      <Sidebar />
      <div className="container">
        <h2>List of Barangay Certificate Recipients</h2>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Certificate</th>
              <th>Date</th>
              <th>Form</th>
              <th>Status</th>
              <th>Action</th>
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
                  <button onClick={() => updateStatus(cert.id, "Pending")} className="pending">
                    Pending
                  </button>
                  <button onClick={() => updateStatus(cert.id, "Approved")} className="approved">
                    Approved
                  </button>
                  <button onClick={() => updateStatus(cert.id, "Complete")} className="complete">
                    Complete
                  </button>
                  <button onClick={() => updateStatus(cert.id, "Not Approved")} className="not-approved">
                    Not Approved
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <style>
          {`
            .container {
              max-width: 1500px;
              margin: auto;
              padding: 20px;
              background: #f9f9f9;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
              text-align: center;
              min-height: 800px;
              position: relative;
              left: 80px; 
            }
            h2 {
              font-size: 44px;
              font-weight: bold;
              margin-bottom: 20px;
              color: #333;
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
              background: rgb(38, 143, 241);
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
              margin: 2px;
            }
            .pending {
              background: rgb(15, 129, 243);
            }
            .approved {
              background: rgb(241, 14, 14);
            }
            .complete {
              background: rgb(14, 241, 14);
            }
            .not-approved {
              background: rgb(3, 2, 2);
            }
          `}
        </style>
      </div>
      </>
    );
};

export default BarangayCert;
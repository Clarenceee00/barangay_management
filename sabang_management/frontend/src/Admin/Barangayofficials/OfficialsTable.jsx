import React, { useState } from 'react';
import Sidebar from '../COM/Sidevar/Sidebar';
import { useNavigate } from 'react-router-dom';
import "./Officials.css";

const OfficialsTable = () => {
  const navigate = useNavigate();

  // Sample officials data
  const [officials, setOfficials] = useState([
    {
      position: "Barangay Captain",
      name: "Juan Dela Cruz",
      contact: "09123456789",
      address: "Purok 1, Barangay XYZ",
      startOfTerm: "2022-07-01",
      endOfTerm: "2025-06-30"
    },
    {
      position: "Kagawad",
      name: "Maria Santos",
      contact: "09987654321",
      address: "Purok 3, Barangay XYZ",
      startOfTerm: "2022-07-01",
      endOfTerm: "2025-06-30"
    },
    {
      position: "SK Chairman",
      name: "Jose Rizal",
      contact: "09211234567",
      address: "Purok 5, Barangay XYZ",
      startOfTerm: "2023-01-01",
      endOfTerm: "2025-12-31"
    }
  ]);

  return (
    <>
      <Sidebar />
      <div className='Official'>
        <h1 className='Head'>Barangay Officials</h1>
        <button onClick={() => navigate('/offForm')}>Add Officials</button>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Start of Term</th>
              <th>End of Term</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {officials.map((official, index) => (
              <tr key={index}>
                <td>{official.position}</td>
                <td>{official.name}</td>
                <td>{official.contact}</td>
                <td>{official.address}</td>
                <td>{official.startOfTerm}</td>
                <td>{official.endOfTerm}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="end-btn">End</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OfficialsTable;

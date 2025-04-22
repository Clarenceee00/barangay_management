import React, { useState } from 'react';
import Sidebar from '../COM/Sidevar/Sidebar';
import { useNavigate } from 'react-router-dom';
import "./Officials.css";

const OfficialsTable = () => {
  const navigate = useNavigate();
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
  
  const [showModal, setShowModal] = useState(false);
  const [selectedOfficial, setSelectedOfficial] = useState(null);

  const openModal = (official = null) => {
    setSelectedOfficial(official);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOfficial(null);
  };

  const handleEdit = (official) => {
    // Logic to edit the official, such as updating their information
    console.log("Editing official: ", official);
  };

  const handleEndTerm = (official) => {
    // Logic to end the term of the official
    console.log("Ending term for: ", official);
  };

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
                  <button className="edit-btn" onClick={() => openModal(official)}>Edit</button>
                  <button className="end-btn" onClick={() => handleEndTerm(official)}>End</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Edit Official</h2>
            <form>
              <label>Position</label>
              <input type="text" value={selectedOfficial?.position} readOnly />
              
              <label>Name</label>
              <input type="text" value={selectedOfficial?.name} />
              
              <label>Contact</label>
              <input type="text" value={selectedOfficial?.contact} />
              
              <label>Address</label>
              <input type="text" value={selectedOfficial?.address} />
              
              <label>Start of Term</label>
              <input type="date" value={selectedOfficial?.startOfTerm} />
              
              <label>End of Term</label>
              <input type="date" value={selectedOfficial?.endOfTerm} />
              
              <div>
                <button type="button" onClick={() => handleEdit(selectedOfficial)}>Save Changes</button>
                <button type="button" onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>
        {`
          .Official {
            padding: 20px;
          }

          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
          }

          .popup-content {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
            position: relative;
            z-index: 1000;
            width: 500px;
          }

          .popup-content form {
            display: flex;
            flex-direction: column;
          }

          .popup-content form label {
            margin-top: 10px;
            font-weight: bold;
          }

          .popup-content form input {
            padding: 8px;
            margin: 5px 0 15px;
            border-radius: 5px;
            border: 1px solid #ccc;
          }

          button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
          }

          button:hover {
            background-color: #0056b3;
          }

          .edit-btn {
            background-color: #28a745;
          }

          .end-btn {
            background-color: #dc3545;
          }

          .popup-content div {
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  );
};

export default OfficialsTable;

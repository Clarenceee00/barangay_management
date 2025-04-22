import React, { useState } from 'react';
import Sidebar from '../COM/Sidevar/Sidebar';
import OfficialForm from './OfficialForm'; // Import your form component
import './Officials.css';

const OfficialsTable = () => {
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

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleAddOfficial = (newOfficial) => {
    setOfficials(prev => [...prev, newOfficial]);
    closeModal();
  };

  return (
    <>
      <Sidebar />
      <div className="Official">
        <h1 className="Head">Barangay Officials</h1>
        <button onClick={openModal}>Add Officials</button>

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

      {showModal && (
  <div className="popup-overlay">
    <div className="popup-content">
      <OfficialForm onAddOfficial={handleAddOfficial} onClose={closeModal} />
    </div>
  </div>
)}
  <style>
    {`
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
  padding: 10px;
  border-radius: 10px;
  width: 500px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}
    `}
  </style>
    </>
  );
};

export default OfficialsTable;

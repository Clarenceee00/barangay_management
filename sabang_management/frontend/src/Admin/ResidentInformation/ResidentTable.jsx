import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../COM/Sidevar/Sidebar";
import ResidentInformationForm from "./ResidentInfo";

const ResidentInformationTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedResident, setSelectedResident] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const openEditModal = (resident) => {
    setSelectedResident(resident);
    setShowForm(true);
  };

  const handleDelete = (residentId) => {
    // Logic to delete resident (can be updated to update state or make API call)
    console.log("Deleting resident with ID: ", residentId);
  };

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="content-box">
          <h2 className="title">Resident Information</h2>
          <button className="add-button" onClick={openForm}>Add Resident</button>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search residents..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <table className="resident-table">
            <thead>
              <tr>
                <th>National ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Birthdate</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123456</td>
                <td>Juan Dela Cruz</td>
                <td>09123456789</td>
                <td>Baliuag, Bulacan</td>
                <td>1990-01-01</td>
                <td>
                  <button className="edit-button" onClick={() => openEditModal({ id: 123456, name: "Juan Dela Cruz", contact: "09123456789", address: "Baliuag, Bulacan", birthdate: "1990-01-01" })}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(123456)}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>9090</td>
                <td>Kimberly Bernardo</td>
                <td>09123456789</td>
                <td>Baliuag, Bulacan</td>
                <td>2003-12-12</td>
                <td>
                  <button className="edit-button" onClick={() => openEditModal({ id: 9090, name: "Kimberly Bernardo", contact: "09123456789", address: "Baliuag, Bulacan", birthdate: "2003-12-12" })}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(9090)}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <div className="popup-overlay">
          <div className="popup-content">
            <ResidentInformationForm onClose={closeForm} resident={selectedResident} />
          </div>
        </div>
      )}

      <style>
        {`
        .content-box {
          padding: 50px;
          width: 1000px;
          margin: auto;
          background: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          position: absolute;
          top: 80px;
          min-height: 800px;
          left: 450px;
        }

        .search-bar {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 20px;
        }

        .search-bar input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          width: 250px;
        }

        button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 15px;
          margin: 10px;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background-color: #0056b3;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 5px;
          overflow: hidden;
        }

        th, td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }

        th {
          background-color: #007bff;
          color: white;
        }

        .edit-button {
          background-color: #28a745;
          margin-right: 5px;
        }

        .delete-button {
          background-color: #dc3545;
        }

        td button:hover {
          opacity: 0.8;
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
        }
        `}
      </style>
    </>
  );
};

export default ResidentInformationTable;
  
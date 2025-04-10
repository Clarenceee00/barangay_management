import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../COM/Sidevar/Sidebar";

const ResidentInformationTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="content-box">
          <h2 className="title">Resident Information</h2>
          <Link to="/ResidentInformationForm">  
            <button className="add-button">Add Resident</button>
          </Link>
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
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>9090</td>
                <td>Kimberly Bernardo</td>
                <td>09123456789</td>
                <td>Baliuag, Bulacan</td>
                <td>2003-12-12</td>
                <td>
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

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
          width: 250px; /* Adjust width as needed */
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
        `}
      </style>
    </>
  );
};

export default ResidentInformationTable;
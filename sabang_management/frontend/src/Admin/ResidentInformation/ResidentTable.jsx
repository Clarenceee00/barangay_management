import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../COM/Sidevar/Sidebar";

const ResidentInformationTable = () => {
  return (
    <>
      <Sidebar />
    <div className="container">
      <div className="content-box">
        <h2 className="title">Resident Information</h2>
        <Link to="/ResidentInformationForm">  
        <button className="add-button">Add Resident</button>
        </Link>
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
        width: 1200px;
        margin: auto;
        background: #f9f9f9;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        position: absolute;
        top: 80px;
        left: 450px;
        }
     .Resident {
              padding: 50px;
              max-width: 1200px;
              width: 100%;
              margin: 80px auto 0 auto;
              background: #f9f9f9;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              display: flex;
              flex-direction: column;
              align-items: center;
          }

          .Head {
              text-align: center;
              font-size: 44px;
              font-weight: bold;
              margin-bottom: 20px;
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

          .edit-btn {
              background-color: #28a745;
              margin-right: 5px;
          }

          .delete-btn {
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
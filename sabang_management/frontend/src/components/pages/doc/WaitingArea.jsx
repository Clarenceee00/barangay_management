// src/WaitingArea.jsx
import React, { useState } from 'react';
import Navbar from '../../Navbar/navbar';

const WaitingArea = () => {
  // State para sa user at kanilang request
  const [userRequest, setUserRequest] = useState({
    name: "Juan Dela Cruz",
    form: "Barangay Clearance",
    status: "Pending"
  });

  return (
    <>
      <Navbar />
      <div className="waiting-area">
        <h2>Request Status</h2>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Form</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>{userRequest.name}</td>
              <td>{userRequest.form}</td>
              <td>
                <div className="status-cell">
                  <span className={`status-badge ${userRequest.status.toLowerCase()}`}>
                    {userRequest.status}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <style>
          {`
            .waiting-area {
              position: absolute;
              top: 100px; /* Nasa taas */
              left: 50%;
              transform: translateX(-50%);
              max-width: 100%;
              width: 90%;
              margin: auto;
              padding: 20px;
              background: #f9f9f9;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(2, 2, 2, 0.1);
              
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 11px;
              text-align: left;
            }
            th {
              background: rgb(38, 143, 241);
              color: white;
            }
            tr:nth-child(even) {
              background: #f2f2f2;
            }
            .status-cell {
              text-align: left;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            }
            .status-badge {
              display: inline-block;
              padding: 8px 14px;
              border-radius: 20px;
              font-weight: 600;
              font-size: 16px;
              color: #fff;
              text-transform: capitalize;
            }
            .status-badge.pending {
              background-color: rgb(243, 158, 11);
            }
            .status-badge.approved {
              background-color:rgb(17, 105, 236);
            }
            .status-badge.complted {
              background-color:rgb(0, 255, 0);
            }
            .status-badge.notapproved {
              background-color:rgb(255, 0, 0);
            }
          `}
        </style>
      </div>
    </>
  );
};

export default WaitingArea;
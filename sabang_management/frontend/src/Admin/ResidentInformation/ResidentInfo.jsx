// src/ResidentInfo.jsx
import React from 'react';

const ResidentInformationForm = () => {
  return (
    <>
      
      <div className="container">
        <h2>Resident Information</h2>
        <div className="form-container">
          <div className="image-upload">
            <div className="image-placeholder">No Image</div>
            <button className="browse-button">Browse picture from drive</button>
          </div>
          <div className="form-fields">
            <div className="field-group">
              <label>National ID:</label>
              <input type="text" />
            </div>
            <div className="field-group">
              <label>Last Name:</label>
              <input type="text" />
            </div>
            <div className="field-group">
              <label>First Name:</label>
              <input type="text" />
            </div>
            <div className="field-group">
              <label>Middle Name:</label>
              <input type="text" />
            </div>
            <div className="field-group">
              <label>Alias:</label>
              <input type="text" />
            </div>
            <div className="field-group">
              <label>Birthdate:</label>
              <input type="date" />
            </div>
            <div className="field-group">
              <label>Birth Place:</label>
              <input type="text" />
            </div>
            <div className="field-group">
              <label>Age:</label>
              <input type="number" />
            </div>
            <div className="field-group">
              <label>Civil Status:</label>
              <select>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
              </select>
            </div>
            <div className="field-group">
              <label>Gender:</label>
              <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="field-group">
              <label>Employ:</label>
              <select>
                <option value="male">Employed</option>
                <option value="female">Un Employed</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="field-group">
              <label>Voters:</label>
              <select>
                <option value="male">Voters</option>
                <option value="female">Not Voters</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="field-group">
              <label>Religion:</label>
              <input type="text" />
            </div>
            <div className="field-group">
              <label>Email:</label>
              <input type="email" />
            </div>
            {/* Additional Fields as per your design */}
          </div>
          <div className="controls">
            <button className="save-button">Save</button>
            <button className="update-button">Update</button>
            <button className="cancel-button">Cancel</button>
          </div>
        </div>
      </div>
      <style>
        {`
          .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #f9f9f9;
            }

        h2 {
            text-align: center;
            }

        .form-container {
            display: flex;
            gap: 20px;
            align-items: flex-start;
            }

       
        .image-upload {
            flex: 1;
            max-width: 300px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #ffffff;
            text-align: center;
            }

        .image-placeholder {
            width: 100%;
            height: 200px;
            background-color: #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #777;
            border-radius: 5px;
            }

        .browse-button {
            margin-top: 10px;
            padding: 10px 20px;
            background-color: #1e90ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            }

    
        .form-fields {
            flex: 2;
            display: grid;
            grid-template-columns: repeat(2, 1fr); 
            gap: 15px;
            width: 100%;
            }

        .field-group {
            display: flex;
            flex-direction: column;
            }

        .field-group label {
            font-weight: bold;
            margin-bottom: 5px;
            }

        .field-group input,
        .field-group select {
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            }


        .controls {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
            }

        .save-button, .update-button, .cancel-button {
            padding: 10px 20px;
            margin-left: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            }

        .save-button {
            background-color: #28a745;
            color: white;
            }

        .update-button {
            background-color: #ffc107;
            color: white;
            }

        .cancel-button {
            background-color: #dc3545;
            color: white;
            }

        `}
      </style>
    </>
  );
};

export default ResidentInformationForm;
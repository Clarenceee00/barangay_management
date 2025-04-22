import React, { useState } from 'react';
import axios from 'axios';

const OfficialForm = ({ onAddOfficial, onClose }) => { // Add onClose prop for the close action
  const [formData, setFormData] = useState({
    position: '',
    name: '',
    contact: '',
    address: '',
    startOfTerm: '',
    endOfTerm: '',
    picture: null, // Add picture to formData
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value, // Handle file input
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post('/api/officials', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for file upload
        },
      });
      onAddOfficial(response.data); // Pass the added official back to parent
      onClose(); // Close the modal after submission
    } catch (error) {
      console.error("Error adding official:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Official</h2>
      <form onSubmit={handleSubmit}>
        {/* File input for picture */}
        <input type="file" name="picture" accept="image/*" onChange={handleChange} /> 
        
        {/* Other form fields */}
        <input type="text" name="position" placeholder="Position" required onChange={handleChange} />
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
        <input type="tel" name="contact" placeholder="Contact" required onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
        <label>Start of Term:</label>
        <input type="date" name="startOfTerm" required onChange={handleChange} />
        <label>End of Term:</label>
        <input type="date" name="endOfTerm" required onChange={handleChange} />

        {/* Submit and Close buttons */}
        <div style={{ marginTop: '10px' }}>
          <button
            type="submit"
            style={{
              backgroundColor: '#4CAF50', // Green background
              color: 'white', // White text
              border: 'none',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              borderRadius: '5px',
              display: 'block', // Make it a block-level element
              width: '100%', // Full width
              marginBottom: '10px', // Space between buttons
            }}
          >
            Add Official
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{
              backgroundColor: '#E3242B', // Red background
              color: 'white', // White text
              border: 'none',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              borderRadius: '5px',
              display: 'block', // Make it a block-level element
              width: '100%', // Full width
            }}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default OfficialForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OfficialForm = ({ onAddOfficial }) => {
  const [formData, setFormData] = useState({
    position: '',
    name: '',
    contact: '',
    address: '',
    startOfTerm: '',
    endOfTerm: '',
    picture: null, // Add picture to formData
  });

  const navigate = useNavigate();

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
      onAddOfficial(response.data);
      navigate('/official'); // Babalik sa officials page
    } catch (error) {
      console.error("Error adding official:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Official</h2>
      <form onSubmit={handleSubmit}>
      <input type="file" name="picture" accept="image/*" onChange={handleChange} /> {/* File input for picture */}
        <input type="text" name="position" placeholder="Position" required onChange={handleChange} />
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
        <input type="tel" name="contact" placeholder="Contact" required onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
        <label>Start of Term:</label>
        <input type="date" name="startOfTerm" required onChange={handleChange} />
        <label>End of Term:</label>
        <input type="date" name="endOfTerm" required onChange={handleChange} />
        <button type="submit">Add Official</button>
      </form>
    </div>
  );
};

export default OfficialForm;
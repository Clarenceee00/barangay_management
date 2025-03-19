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
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/officials', formData);
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


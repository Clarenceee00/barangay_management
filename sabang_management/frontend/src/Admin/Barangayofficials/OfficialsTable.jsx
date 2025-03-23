import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../COM/Sidevar/Sidebar';
import { useNavigate } from 'react-router-dom';
import "./Officials.css";

const OfficialsTable = () => {
  const [officials, setOfficials] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOfficials();
  }, []);

  const fetchOfficials = async () => {
    try {
      const response = await axios.get('/api/officials');
      setOfficials(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching officials:", error);
      setOfficials([]);
    } finally {
      setLoading(false);
    }
  };

  // Function para madagdagan ang bagong official
  const addOfficial = (newOfficial) => {
    setOfficials([...officials, newOfficial]);
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
                  <button className="edit-btn">Edit</button>
                  <button className="end-btn">End</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default OfficialsTable;

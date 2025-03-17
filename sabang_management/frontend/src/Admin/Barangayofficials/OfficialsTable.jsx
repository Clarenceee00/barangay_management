// src/components/OfficialsTable.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../COM/Sidevar/Sidebar';
import "./Officials.css"; 


const OfficialsTable = () => {
  const [officials, setOfficials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOfficials = async () => {
      try {
        const response = await axios.get('/api/officials');
        console.log("Fetched Data:", response.data); // Debugging log
        setOfficials(Array.isArray(response.data) ? response.data : []); // Ensure it's an array
      } catch (error) {
        console.error("Error fetching officials:", error);
        setOfficials([]); // Set as empty array on error
      } finally {
        setLoading(false);
      }
    };
  
    fetchOfficials();
  }, []);


  return (
    <>
    <Sidebar/>
    <div className='Official'>
      <h2 className='Head'>Barangay Officials</h2>
      <button>Add Officials</button>
      <button>Delete</button>
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
          {officials.map(official => (
            <tr key={official.id}>
              <td>{official.position}</td>
              <td>{official.name}</td>
              <td>{official.contact}</td>
              <td>{official.address}</td>
              <td>{official.startOfTerm}</td>
              <td>{official.endOfTerm}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(official.id)}>End</button>
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
// src/Dashboard.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Sidebar from '../COM/Sidevar/Sidebar';


ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
  population: {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [58, 42],
        backgroundColor: ['#36a2eb', '#ff6384'],
        hoverBackgroundColor: ['#36a2eb', '#ff6384'],
      },
    ],
  },
  residential: {
    labels: ['Occupied', 'Vacant'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#4bc0c0', '#36a2eb'],
        hoverBackgroundColor: ['#4bc0c0', '#36a2eb'],
      },
    ],
  },
  establishments: {
    labels: ['Voters', 'Not Voters'],
    datasets: [
      {
        data: [93, 7],
        backgroundColor: ['#ffce56', '#ff6384'],
        hoverBackgroundColor: ['#ffce56', '#ff6384'],
      },
    ],
  },
  helpdesk: {
    labels: ['Employed', 'Not Employed'],
    datasets: [
      {
        data: [99, 100],
        backgroundColor: ['#ff6384', '#36a2eb'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb'],
      },
    ],
  },
};

const Dashboard = () => {
  return (
    <>
    <Sidebar />

    <div style={styles.container}>
      <h1 style={{ textAlign: "center", marginTop: "5px"}}>Barangay Sabang Dashboard</h1>
      <div style={styles.statContainer}>
        <div  style={styles.statBox} className='FirstCircle'>
          <h2>2,000</h2>
          <p>Population</p>
          <Doughnut data={data.population} />
        </div>
        <div style={styles.statBox}>
          <h2>2,000</h2>
          <p>Residential Areas</p>
          <Doughnut data={data.residential} />
        </div>
        <div style={styles.statBox}>
          <h2>2,000</h2>
          <p>Voters</p>
          <Doughnut data={data.establishments} />
        </div>
        <div style={styles.statBox}>
          <h2>2,000</h2>
          <p>EMPLOY</p>
          <Doughnut data={data.helpdesk} />
        </div>
      </div>
    </div>
    </>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    marginLeft: '250px',

  },
  statContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '100px',
  },
  statBox: {
    width: '250px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
    marginLeft: '40px',

  },
};

export default Dashboard;
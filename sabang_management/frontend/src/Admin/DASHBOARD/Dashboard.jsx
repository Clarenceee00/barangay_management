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
  Certificate: {
    labels: ['BarangayIndigency', 'BarangayClearance', 'IndengencyScholarship', 'Job&Oath', 'CertificateOfResidency'],
    datasets: [
      {
        data: [70, 30, 10, 20, 40],
        backgroundColor: ['#4bc0c0', '#36a2eb', '#ffce56', '#ff6384', '#9966ff'],
        hoverBackgroundColor: ['#4bc0c0', '#36a2eb, #ffce56', '#ff6384', '#9966ff'],
      },
    ],
  },
  Voters: {
    labels: ['Voters', 'Not Voters'],
    datasets: [
      {
        data: [93, 7],
        backgroundColor: ['#ffce56', '#ff6384'],
        hoverBackgroundColor: ['#ffce56', '#ff6384'],
      },
    ],
  },
  Employ: {
    labels: ['Employed', 'Not Employed'],
    datasets: [
      {
        data: [99, 100],
        backgroundColor: ['#ff6384', '#36a2eb'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb'],
      },
    ],
  },
  CivilStatus: {
    labels: ['Single', 'Married', 'Divorced'],
    datasets: [
      {
        data: [50, 30, 10, 10], // Example data
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
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
      <div style={styles.statBox}>
          <h2>2,000</h2>
          <p>Barangay Certificate</p>
          <Doughnut data={data.Certificate} />
        </div>
        <div  style={styles.statBox} className='FirstCircle'>
          <h2>2,000</h2>
          <p>Population</p>
          <Doughnut data={data.population} />
        </div>
        <div style={styles.statBox}>
          <h2>2,000</h2>
          <p>Voters</p>
          <Doughnut data={data.Voters} />
        </div>
        <div style={styles.statBox}>
          <h2>2,000</h2>
          <p>Employ</p>
          <Doughnut data={data.Employ} />
        </div>
        <div style={styles.statBox}>
            <h2>2,000</h2>
            <p>Civil Status</p>
            <Doughnut data={data.CivilStatus} />
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
    justifyContent: 'center',       // Center align para pantay ang cards
    flexWrap: 'wrap',               // Para mag-wrap pag maliit ang screen
    gap: '20px',                    // Mas magandang spacing kaysa manual margin
    marginTop: '100px',
  },
  statBox: {
    width: '230px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)', // Medyo softer shadow
    transition: 'transform 0.2s ease-in-out',
  },
};

export default Dashboard;
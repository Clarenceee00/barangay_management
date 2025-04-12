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
        hoverBackgroundColor: ['#4bc0c0', '#36a2eb', '#ffce56', '#ff6384', '#9966ff'],
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
        data: [99, 1],
        backgroundColor: ['#ff6384', '#36a2eb'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb'],
      },
    ],
  },
  CivilStatus: {
    labels: ['Single', 'Married', 'Divorced'],
    datasets: [
      {
        data: [50, 30, 20],
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
        <h1 style={styles.header}>Barangay Sabang Dashboard</h1>
        <div style={styles.statContainer}>

          <div style={{ ...styles.statBox, backgroundColor: '#98ff98' }}>
            <h2>2,000</h2>
            <p>Barangay Certificate</p>
          </div>
          <div style={{ ...styles.statBox, backgroundColor: '#ffcccc' }}>
            <h2>2,000</h2>
            <p>Population</p>
          </div>
          <div style={{ ...styles.statBox, backgroundColor: '#add8e6' }}>
            <h2>2,000</h2>
            <p>Voters</p>
          </div>
          <div style={{ ...styles.statBox, backgroundColor: '#d3d3d3' }}>
            <h2>2,000</h2>
            <p>Employ</p>
          </div>
          <div style={{ ...styles.statBox, backgroundColor: '#ffffe0' }}>
            <h2>2,000</h2>
            <p>Civil Status</p>
          </div>
        </div>
        
        <div style={styles.chartContainer}>
          <div style={styles.chartBox}>
            <Doughnut data={data.Certificate} />
          </div>
          <div style={styles.chartBox}>
            <Doughnut data={data.population} />
          </div>
          <div style={styles.chartBox}>
            <Doughnut data={data.Voters} />
          </div>
          <div style={styles.chartBox}>
            <Doughnut data={data.Employ} />
          </div>
          <div style={styles.chartBox}>
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
    marginLeft: '280px',
  },
  header: {
    marginBottom: '30px',
    fontSize: '60px',
    fontWeight: 'bold',
  },
  statContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '50px',
  },
  statBox: {
    width: '150px',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    textAlign: 'center',
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '50px',
  },
  chartBox: {
    width: '250px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  }
};

export default Dashboard;
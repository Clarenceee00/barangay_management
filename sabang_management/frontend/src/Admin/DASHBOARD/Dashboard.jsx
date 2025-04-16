// src/Dashboard.jsx
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Sidebar from '../COM/Sidevar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faUsers, faVoteYea, faBriefcase, faHeart } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      <Sidebar />
      <div style={styles.container}>
        <div style={styles.headerWrapper}>
          <div style={styles.headerContent}>
            <h1 style={styles.header}>Barangay Sabang Dashboard Analytics</h1>
          </div>
          <div style={styles.miniCalendar}>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
            />
          </div>
        </div>

        <div style={styles.statContainer}>
          <div style={{ ...styles.statBox, backgroundColor: '#98ff98' }}>
            <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: '50px', marginRight: '8px' }} />
            <h2>170</h2>
            <p>Barangay Certificate</p>
          </div>

          <div style={{ ...styles.statBox, backgroundColor: '#ffcccc' }}>
            <FontAwesomeIcon icon={faUsers} style={{ fontSize: '50px', marginRight: '8px' }} />
            <h2>100</h2>
            <p>Population</p>
          </div>

          <div style={{ ...styles.statBox, backgroundColor: '#add8e6' }}>
            <FontAwesomeIcon icon={faVoteYea} style={{ fontSize: '50px', marginRight: '8px' }} />
            <h2>100</h2>
            <p>Voters</p>
          </div>

          <div style={{ ...styles.statBox, backgroundColor: '#d3d3d3' }}>
            <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '50px', marginRight: '8px' }} />
            <h2>100</h2>
            <p>Employ</p>
          </div>

          <div style={{ ...styles.statBox, backgroundColor: '#ffffe0' }}>
            <FontAwesomeIcon icon={faHeart} style={{ fontSize: '50px', marginRight: '8px' }} />
            <h2>100</h2>
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
    position: 'relative',
    padding: '20px',
    textAlign: 'center',
    marginLeft: '280px',
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '30px',
  },
  headerContent: {
    flex: 1,
    textAlign: 'center',
  },
  header: {
    fontSize: '60px',
    fontWeight: 'bold',
    margin: 0,
  },
  miniCalendar: {
    backgroundColor: 'lightgray',
    padding: '5px 10px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    marginTop: '30px',
    marginRight: '10px',
  },
  statContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '50px',
  },
  statBox: {
    width: '180px',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    textAlign: 'center',
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
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

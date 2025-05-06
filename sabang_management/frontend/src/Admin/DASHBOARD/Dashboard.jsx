import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import Sidebar from '../COM/Sidevar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faVoteYea, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Register chart components
ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

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
  Age: {
    labels: ['0-17', '18-35', '36-59', '60+'],
    datasets: [
      {
        label: 'Age Distribution',
        data: [15, 40, 30, 15],
        backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99'],
        hoverBackgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99'],
      },
    ],
  },
};

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState(new Date());

  return (
    <>
      <Sidebar />
      <div style={styles.container}>
        <div style={styles.headerWrapper}>
          <div style={styles.headerContent}>
            <h1 style={styles.header}>Barangay Sabang Dashboard Analytics</h1>
          </div>
          </div>
          <div style={styles.miniCalendar}>
            <DatePicker
              selected={selectedYear}
              onChange={(date) => setSelectedYear(date)}
              dateFormat="yyyy"
              showYearPicker
              yearItemNumber={12}
              calendarClassName="custom-datepicker"
            />
          </div>
        

        <div style={styles.statContainer}>
          <div style={{ ...styles.statBox, backgroundColor: '#ffcccc' }}>
            <FontAwesomeIcon icon={faUsers} style={styles.icon} />
            <h2>100</h2>
            <p>Population</p>
          </div>
          <div style={{ ...styles.statBox, backgroundColor: '#add8e6' }}>
            <FontAwesomeIcon icon={faVoteYea} style={styles.icon} />
            <h2>100</h2>
            <p>Voters</p>
          </div>
          <div style={{ ...styles.statBox, backgroundColor: '#d3d3d3' }}>
            <FontAwesomeIcon icon={faBriefcase} style={styles.icon} />
            <h2>100</h2>
            <p>Employment</p>
          </div>
        </div>

        {/* Pie Charts Row */}
        <div style={styles.pieRow}>
          <div style={styles.chartBox}><Pie data={data.population} /></div>
          <div style={styles.chartBox}><Pie data={data.Voters} /></div>
          <div style={styles.chartBox}><Pie data={data.Employ} /></div>
        </div>

        {/* Full-width Age Bar Chart at the bottom */}
        <div style={styles.barContainer}>
        <Bar
          data={data.Age}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'bottom' },
            },
            layout: {
              padding: 0,
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: { stepSize: 10 },
      },
    },
  }}
/>

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
    marginLeft: '250px',
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '100px',
  },
  headerContent: {
    flex: 1,
    textAlign: 'center',
  },
  header: {
    fontSize: '60px',
    fontWeight: 'bold',
    margin: 0,
    marginTop: '200px',
  },
  miniCalendar: {
    backgroundColor: 'lightgray',
    padding: '5px 10px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    marginTop: '-111px',      
    marginLeft: '1500px',
    width: '180px',
  },
  statContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '50px',
  },
  statBox: {
    width: '350px',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    textAlign: 'center',
  },
  icon: {
    fontSize: '50px',
    marginBottom: '10px',
  },
  pieRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    marginBottom: '30px',
  },
  chartBox: {
    width: '250px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  },
  barContainer: {
    width: '70%',
    height: '200px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    marginLeft: '230px',
  },
};

export default Dashboard;
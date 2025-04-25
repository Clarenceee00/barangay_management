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
        label: 'Barangay Certificate Request',
        data: [70, 30, 10, 20, 40],
        backgroundColor: ['#4bc0c0', '#36a2eb', '#ffce56', '#ff6384', '#9966ff'],
        borderRadius: 5
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
    labels: ['Single', 'Married', 'Divorced', 'Solo Parents'],
    datasets: [
      {
        data: [50, 30, 20, 15],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#e6ccff'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#e6ccff'],
      },
    ],
  },
  Officers: {
    labels: ['Kapitan', 'Kagawad', 'Tanod', 'SK Chairman', 'Secretary', 'Treasurer'],
    datasets: [
      {
        label: 'Barangay Officers',
        data: [1, 7, 10, 1, 1, 1],
        backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#c2c2f0', '#ffb3e6'],
        hoverBackgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#c2c2f0', '#ffb3e6'],
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
            <p>Employ</p>
          </div>
          <div style={{ ...styles.statBox, backgroundColor: '#ffffe0' }}>
            <FontAwesomeIcon icon={faHeart} style={styles.icon} />
            <h2>100</h2>
            <p>Civil Status</p>
          </div>
          <div style={{ ...styles.statBox, backgroundColor: '#98ff98' }}>
            <FontAwesomeIcon icon={faFileAlt} style={styles.icon} />
            <h2>170</h2>
            <p>Barangay Certificate</p>
          </div>
          <div style={{ ...styles.statBox, backgroundColor: '#ffeb99' }}>
            <FontAwesomeIcon icon={faBriefcase} style={styles.icon} />
            <h2>21</h2>
            <p>Barangay Officials</p>
          </div>
        </div>

        <div style={styles.chartContainer}>
          <div style={styles.chartBox}><Doughnut data={data.population} /></div>
          <div style={styles.chartBox}><Doughnut data={data.Voters} /></div>
          <div style={styles.chartBox}><Doughnut data={data.Employ} /></div>
          <div style={styles.chartBox}><Doughnut data={data.CivilStatus} /></div>
          <div style={styles.chartBox}><Doughnut data={data.Certificate} /></div>
          <div style={styles.chartBox}><Doughnut data={data.Officers} /></div>
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
    marginLeft: '250px', // Offset to not overlap the sidebar
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
    marginTop: '90px',
  },
  miniCalendar: {
    backgroundColor: 'lightgray',
    padding: '5px 10px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    marginTop: '100px',
    marginRight: '30px',
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
    width: '180px',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    textAlign: 'center',
  },
  icon: {
    fontSize: '50px',
    marginBottom: '10px',
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    marginBottom: '50px',
  },
  chartBox: {
    width: '250px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  },
};

export default Dashboard;

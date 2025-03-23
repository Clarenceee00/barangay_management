import {Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/Contact.jsx";
import Certification from "./components/pages/Certification"
import JobSeekerOath from "./components/pages/doc/JobSeekerOath";
import ScholarshipForm from "./components/pages/doc/ScholarshipForm";
import BarangayClearance from "./components/pages/doc/BarangayClearance";
import ResidencyForm from "./components/pages/doc/ResidencyForm";
import Sidebar from "./Admin/COM/Sidevar/Sidebar.jsx";
import ProjectUpload from "./Admin/Modules/ProjectUpload/ProjectUpload.jsx";
import OfficialsTable from "./Admin/Barangayofficials/OfficialsTable.jsx";
import IndigencyForm from "./components/pages/doc/IndigencyForm.jsx";
import OffSignUpForm from "./Admin/Barangayofficials/OfficialForm.jsx";
import BarangayCert from "./Admin/BarangayCertificateForm/BarangayCert.jsx"
import Dashboard from "./Admin/DASHBOARD/Dashboard.jsx"
import ResidentInformationForm from "./Admin/ResidentInformation/ResidentInfo.jsx"
import ResidentInformationTable from "./Admin/ResidentInformation/ResidentTable.jsx"




function App() {
  return (
    <>
      <Routes>
      <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/job-seeker-oath" element={<JobSeekerOath />} />
        <Route path="/indigency" element={<IndigencyForm/>} />
        <Route path="/scholarship-form" element={<ScholarshipForm />} />
        <Route path="/barangay-clearance" element={<BarangayClearance />} />
        <Route path="/residency-form" element={<ResidencyForm />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/project" element={<ProjectUpload />} />
       <Route path="/Official" element={<OfficialsTable/>} />
       <Route path="/offForm" element={< OffSignUpForm/>} />
       <Route path="/barangaycert" element={< BarangayCert/>} />
       <Route path="/dashboard" element={<Dashboard/>} />
       <Route path="/ResidentInformationForm" element={<ResidentInformationForm/>} />
       <Route path="/ResidentInformationTable" element={<ResidentInformationTable/>} />
       
 
        
        <Route path="/resident-information" element={<h1>Resident Information</h1>} />
        <Route path="/barangay-certificate" element={<h1>Barangay Certificate</h1>} />
        <Route path="/certificate-of-indigency" element={<h1>Certificate of Indigency</h1>} />
        <Route path="/barangay-permit" element={<h1>Barangay Permit</h1>} />
        <Route path="/blotter-records" element={<h1>Blotter Records</h1>} />
        <Route path="/system-settings" element={<h1>System Settings</h1>} />
      </Routes>   

      
      </>
  );
}
export default App;
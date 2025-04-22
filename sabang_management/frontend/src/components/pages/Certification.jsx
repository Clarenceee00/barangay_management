import React, { useState } from 'react';
import Navbar from "../Navbar/navbar";
import BarangayClearance from '../pages/doc/BarangayClearance'; 
import IndigencyForm from '../pages/doc/IndigencyForm';
import IndigencyScholarship from './doc/ScholarshipForm';
import ResidencyForm from '../pages/doc/ResidencyForm';
import JobSeekerForm from './doc/JobSeekerOath';
import "./style/certificate.css";

export const Certification = () => {
  const [selectedForm, setSelectedForm] = useState(null);

  const closeForm = () => setSelectedForm(null);

  return (
    <>
      <Navbar />

      <div className="modaloverlay">
        <div className="modalcontent">
          <h2 className="modaltitle">CERTIFICATE REQUEST</h2>
          <div className="buttons">
            <button className="docbutton" onClick={() => setSelectedForm("clearance")}>Barangay Clearance</button>
            <button className="docbutton" onClick={() => setSelectedForm("scholarship")}>Indigency Scholarship</button>
            <button className="docbutton" onClick={() => setSelectedForm("residency")}>Certificate of Residency</button>
            <button className="docbutton" onClick={() => setSelectedForm("jobseeker")}>Job Seeker & Oath</button>
            <button className="docbutton" onClick={() => setSelectedForm("indigency")}>Barangay Indigency</button>
          </div>
        </div>

        {/* Optional: Add blur background when form is open */}
        {selectedForm && <div className="formoverlay"></div>}

        {/* Conditional Rendering of Forms */}
        {selectedForm === "clearance" && (
          <div className="formpopup">
            <BarangayClearance onClick={closeForm} />
            <button onClick={closeForm} className="close-button">Close</button>
          </div>
        )}

        {selectedForm === "scholarship" && (
          <div className="formpopup">
            <IndigencyScholarship onClick={closeForm} />
            <button onClick={closeForm} className="close-button">Close</button>
          </div>
        )}

        {selectedForm === "residency" && (
          <div className="formpopup">
            <ResidencyForm onClick={closeForm} />
            <button onClick={closeForm} className="close-button">Close</button>
          </div>
        )}

        {selectedForm === "jobseeker" && (
          <div className="formpopup">
            <JobSeekerForm onClick={closeForm} />
            <button onClick={closeForm} className="close-button">Close</button>
          </div>
        )}

        {selectedForm === "indigency" && (
          <div className="formpopup">
            <IndigencyForm onClick={closeForm} />
            <button onClick={closeForm} className="close-button">Close</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Certification;

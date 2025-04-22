import "./Style/Design.css"
import barangayIcon from "../../../assets/ICONNNSS.png";

function JobSeekerOath({ onClick= "Submit",closeForm }) {
    return (
      <div className="form-container">
        <img src={barangayIcon} alt="Barangay Clearance" className="barangay-image" />
        <h2>Job Seeker & Oath</h2>
        <label>Name: <input type="text" /></label>
        <label>Age: <input type="number" /></label>
        <label>Birthday: <input type="date" /></label>
        <label>Address: <input type="text" /></label>
        <div className="gender">
            <label>
              <input type="radio" name="gender" value="Female" /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="Male" /> Male
            </label>
          </div>
    <button className="submit-button" onClick={onClick}>Submit</button>
    <button className="close-button" onClick={closeForm}>Close</button>

      </div>
    );
  }
  
  export default JobSeekerOath;
  
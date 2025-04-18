import "./Style/Design.css"
import BackButton from "../../Back/Back";
import barangayIcon from "../../../assets/Icon.jfif";

function JobSeekerOath({ onClick= "Submit" }) {
    return (
      <div className="form-container">
        <img src={barangayIcon} alt="Barangay Clearance" className="barangay-image" />
        <h2>Job Seeker & Oath</h2>
        <label>Name: <input type="text" /></label>
        <label>Age: <input type="number" /></label>
        <label>Birthday: <input type="date" /></label>
        <label>Address: <input type="text" /></label>
        <label>Gender: 
          <input type="radio" name="gender" value="female" /> Female
          <input type="radio" name="gender" value="male" /> Male
        </label>
    <button className="submit-button" onClick={onClick}>
           Submit
    </button>
    <BackButton />
      </div>
    );
  }
  
  export default JobSeekerOath;
  
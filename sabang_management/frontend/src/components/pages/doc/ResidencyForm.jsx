import barangayIcon from "../../../assets/ICONNNSS.png";

function ResidencyForm({ onClick = "Submit", closeForm }) {
    return (
      <div className="form-container">
        <img src={barangayIcon} alt="Barangay Clearance" className="barangay-image" />
        <h2>Residency (No Picture)</h2>
        <label>Name: <input type="text" /></label>
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
  
  export default ResidencyForm;
  

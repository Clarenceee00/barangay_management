import barangayIcon from "../../../assets/ICONNNSS.png";

function ResidencyForm({ onClick = "Submit" }) {
    return (
      <div className="form-container">
        <img src={barangayIcon} alt="Barangay Clearance" className="barangay-image" />
        <h2>Residency (No Picture)</h2>
        <label>Name: <input type="text" /></label>
        <label>Address: <input type="text" /></label>
        <label>Gender: 
          <input type="radio" name="gender" value="female" /> Female
          <input type="radio" name="gender" value="male" /> Male
        </label>
        <button className="submit-button" onClick={onClick}>
           Submit
           </button>
      </div>
    );
  }
  
  export default ResidencyForm;
  

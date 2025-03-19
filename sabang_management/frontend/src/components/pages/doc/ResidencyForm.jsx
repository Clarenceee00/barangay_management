import BackButton from "../../Back/Back";

function ResidencyForm({ onClick = "Submit" }) {
    return (
      <div className="form-container">
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
           <BackButton />
      </div>
    );
  }
  
  export default ResidencyForm;
  

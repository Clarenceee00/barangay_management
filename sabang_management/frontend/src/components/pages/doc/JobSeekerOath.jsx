import "./Style/Design.css"

function JobSeekerOath({ onClick= "Submit" }) {
    return (
      <div className="form-container">
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
      </div>
    );
  }
  
  export default JobSeekerOath;
  
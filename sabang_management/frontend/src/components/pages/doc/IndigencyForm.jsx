import "./Style/Indigency.css"
import barangayIcon from "../../../assets/ICONNNSS.png";

function IndigencyForm() {
    return (
      <div className="form-container">
          
        <img src={barangayIcon} alt="Barangay Clearance" className="barangay-image" />
        <h2>INDIGENCY FORM</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Para saan gagamitin:
            <input type="text" name="purpose" />
          </label>
          <div className="gender">
            <label>
              <input type="radio" name="gender" value="Female" /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="Male" /> Male
            </label>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      
      </div>
    );
  }
  
  export default IndigencyForm;
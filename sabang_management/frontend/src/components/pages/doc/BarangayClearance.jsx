import "./Style/Design.css"
import barangayIcon from "../../../assets/ICONNNSS.png";

function BarangayClearance({ onClick = "Submit" }) {
    return (
      <div className="form-container">
      <img src={barangayIcon} alt="Barangay Clearance" className="barangay-image" />
        <h2>Barangay Clearance</h2>
        <label>Full Name: <input type="text" /></label>
        <label>Birthday: <input type="date" /></label>
        <label>Address: <input type="text" /></label>
        <label>Para saan gagamitin: <input type="text" /></label>
    
    <button className="submit-button" onClick={onClick}>
           Submit
    </button>
   
      </div>
      
    );
  }
  
  export default BarangayClearance;
  
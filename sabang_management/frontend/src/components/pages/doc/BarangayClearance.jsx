import BackButton from "../../Back/Back";
import "./Style/Design.css"

function BarangayClearance({ onClick = "Submit" }) {
    return (
      <div className="form-container">
        <img src="../../../assets/Icon.jpg" />
        <h2>Barangay Clearance</h2>
        <label>Name: <input type="text" /></label>
        <label>Birthday: <input type="date" /></label>
        <label>Address: <input type="text" /></label>
        <label>Para saan gagamitin: <input type="text" /></label>
    
    <button className="submit-button" onClick={onClick}>
           Submit
    </button>
    <BackButton />
      </div>
      
    );
  }
  
  export default BarangayClearance;
  
import React, { useState } from "react";
import "./Style/Indigency.css";
import barangayIcon from "../../../assets/ICONNNSS.png";

function IndigencyForm({ onClick = "Submit", closeForm }) {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file)); // Create an image URL to preview
    } else {
      alert("Please upload a valid image file.");
    }
  };

  return (
    <div className="form-container">
      <img src={barangayIcon} alt="Barangay Clearance" className="barangay-image" />
      <h2>INDIGENCY FORM</h2>
      <form>
      <label>
      Upload Valid ID:
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
          />
        </label>
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
        
        {/* Image Preview */}
        {image && (
          <div className="image-preview">
            <img src={image} alt="Preview" className="preview-img" />
          </div>
        )}

        <button type="submit" className="submit-button" onClick={onClick}>
          Submit
        </button>
        <button className="close-button" onClick={closeForm}>
          Close
        </button>
      </form>
    </div>
  );
}

export default IndigencyForm;

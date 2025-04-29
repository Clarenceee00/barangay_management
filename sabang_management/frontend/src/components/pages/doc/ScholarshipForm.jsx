import React, { useState } from "react";
import barangayIcon from "../../../assets/ICONNNSS.png";

function ScholarshipForm({ onClick = "Submit", closeForm }) {
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
      <h2>Pagpapatunay for Scholarship</h2>
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
          Name of Parent: 
          <input type="text" />
        </label>
        <label>
          Age: 
          <input type="number" />
        </label>
        <label>
          Trabaho: 
          <input type="text" />
        </label>
        <label>
          Kita kada Buwan: 
          <input type="text" />
        </label>
        {image && (
          <div className="photo-preview">
            <img src={image} alt="Preview" className="preview-image" />
          </div>
        )}

        <button className="submit-button" onClick={onClick}>
          Submit
        </button>
        <button className="close-button" onClick={closeForm}>
          Close
        </button>
      </form>
    </div>
  );
}

export default ScholarshipForm;

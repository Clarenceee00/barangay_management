import { useState } from "react";
import "./Style/Design.css";
import barangayIcon from "../../../assets/ICONNNSS.png";

function BarangayClearance({ onSubmit, closeForm }) {
  const [formData, setFormData] = useState({
    fullName: "",
    birthday: "",
    address: "",
    purpose: "",
    photo: null,
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Image files only (jpg, png, etc.)");
      setFormData((prev) => ({ ...prev, photo: null }));
      setPhotoPreview(null);
      return;
    }

    setError("");
    setFormData((prev) => ({ ...prev, photo: file }));
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(formData);
  };

  return (
    <div className="form-container">
      <img src={barangayIcon} alt="Barangay Clearance" className="barangay-image" />
      <h2>Barangay Clearance</h2>

      <label htmlFor="photo">Upload Valid ID:
        <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      
      <label htmlFor="fullName">Full Name:
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="birthday">Birthday:
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="address">Address:
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="purpose">Para saan gagamitin:
        <input
          type="text"
          id="purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
        />
      </label>

      {error && <p className="error-text">{error}</p>}

      {photoPreview && (
        <div className="photo-preview">
          <p>Preview:</p>
          <img src={photoPreview} alt="Preview" className="preview-image" />
        </div>
      )}

      <div className="form-buttons">
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
        <button className="close-button" onClick={closeForm}>Close</button>
      </div>
    </div>
  );
}

export default BarangayClearance;

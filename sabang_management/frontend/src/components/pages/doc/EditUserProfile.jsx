import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/navbar";

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    middleName: "",
    nickname: "",
    birthdate: "",
    birthplace: "",
    age: "",
    contactNumber: "",
    civilStatus: "",
    gender: "",
    employmentStatus: "",
    votersStatus: "",
    religion: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/profile/");
        setFormData(res.data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://127.0.0.1:8000/api/profile/update/", formData);
      alert("Profile updated successfully!");
      navigate("/dashboard");
    } catch (err) {
      alert("Error updating profile: " + JSON.stringify(err.response?.data || err.message));
    }
  };

  return (
    <>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
          }

          .container {
            width: 100%;
            max-width: 1100px;
            margin: 0 auto;
            padding: 80px;
            margin-top: 1800px; 
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #f9f9f9;
          }

          h1 {
            text-align: center;
            margin-bottom: 1rem;
          }

          .form-container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
            padding: 1rem;
          }

          .image-upload {
            width: 100%;
            max-width: 400px;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #ffffff;
            text-align: center;
          }

          .image-placeholder {
            width: 100%;
            height: 200px;
            background-color: #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #777;
            border-radius: 5px;
          }

          .browse-button {
            margin-top: 10px;
            padding: 0.5rem 1rem;
            background-color: #1e90ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .form-fields {
            width: 100%;
            max-width: 600px;
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 1rem;
          }

          .field-group {
            display: flex;
            flex-direction: column;
          }

          .field-group label {
            font-weight: bold;
            margin-bottom: 0.5rem;
          }

          .field-group input,
          .field-group select {
            padding: 0.8rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
          }

          .controls {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            margin-top: 2rem;
          }

          .save-button, .update-button, .cancel-button {
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
            max-width: 300px;
          }

          .save-button {
            background-color: #28a745;
            color: white;
          }

          .update-button {
            background-color: #ffc107;
            color: white;
          }

          .cancel-button {
            background-color: #dc3545;
            color: white;
          }

          /* Media Queries for Responsiveness */
          @media (max-width: 768px) {
            .form-fields {
              grid-template-columns: 1fr;
            }

            .image-upload {
              width: 80%;
            }

            .controls {
              flex-direction: column;
            }
          }

          @media (max-width: 480px) {
            .container {
              padding: 1rem;
            }

            h1 {
              font-size: 1.5rem;
            }

            .form-fields {
              gap: 1rem;
            }

            .save-button, .update-button, .cancel-button {
              padding: 1rem;
              width: 100%;
            }
          }
        `}
      </style>

      <Navbar />
      <div className="container">
        <h1>Edit Profile</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="image-upload">
            <div className="image-placeholder">Image Preview</div>
            <button type="button" className="browse-button">Browse</button>
          </div>
          <div className="form-fields">
            {[
              ["Username", "username"],
              ["Email", "email"],
              ["New Password (optional)", "password"],
              ["Last Name", "lastName"],
              ["First Name", "firstName"],
              ["Middle Name", "middleName"],
              ["Nickname", "nickname"],
              ["Birthdate", "birthdate", "date"],
              ["Birthplace", "birthplace"],
              ["Age", "age", "number"],
              ["Contact Number", "contactNumber", "number"],
              ["Religion", "religion"],
            ].map(([label, name, type = "text"]) => (
              <div className="field-group" key={name}>
                <label>{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                />
              </div>
            ))}

            {[
              ["Civil Status", "civilStatus", ["", "single", "married", "divorced", "soloparents"]],
              ["Gender", "gender", ["", "male", "female"]],
              ["Employment Status", "employmentStatus", ["", "employed", "unemployed"]],
              ["Voter Status", "votersStatus", ["", "voter", "non-voter"]],
            ].map(([label, name, options]) => (
              <div className="field-group" key={name}>
                <label>{label}</label>
                <select name={name} value={formData[name]} onChange={handleChange}>
                  {options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt === "" ? `Select ${label}` : opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </form>

        <div className="controls">
          <button type="submit" className="update-button" onClick={handleSubmit}>
            Update
          </button>
          <button type="button" className="cancel-button" onClick={() => navigate("/home")}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProfile;

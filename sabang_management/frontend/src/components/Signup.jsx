import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Sigup.css"; 
import { useState } from "react";
import axios from "axios";

const Signup = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", formData);
      alert(response.data.message);
      navigate("/login"); // Redirect to login after successful signup
    } catch (error) {
      alert("Error signing up: " + JSON.stringify(error.response?.data || error.message));
    }
  };

  return (
    <div className="signup-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />

        {/* Resident Information */}
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
        <input type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} />
        <input type="text" name="nickname" placeholder="Nickname" value={formData.nickname} onChange={handleChange} />
        <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} />
        <input type="text" name="birthplace" placeholder="Birth Place" value={formData.birthplace} onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
        <input type="number" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} />
        
        <select name="civilStatus" value={formData.civilStatus} onChange={handleChange}>
          <option value="">Civil Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="soloparents">Solo Parent</option>
        </select>

        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange}>
          <option value="">Employment Status</option>
          <option value="employed">Employed</option>
          <option value="unemployed">Unemployed</option>
        </select>

        <select name="votersStatus" value={formData.votersStatus} onChange={handleChange}>
          <option value="">Voter Status</option>
          <option value="voter">Voter</option>
          <option value="non-voter">Not Voter</option>
        </select>

        <input type="text" name="religion" placeholder="Religion" value={formData.religion} onChange={handleChange} />

        <button type="submit">Sign Up</button>
        <p>Do you have an account? <Link to="/login">Log in</Link></p>
      </form>
    </div>
  );
};

export default Signup;

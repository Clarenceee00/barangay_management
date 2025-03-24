import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css"; 

import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", formData);
      alert(response.data.message);
    } catch (error) {
      alert("Error signing up: " + JSON.stringify(error.response.data));
    }
  };
  
  return (
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      backgroundImage: "url('src/assets/icon.jfif')",
      backgroundSize: "1000px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      }}>
      
      <form className="auth-form ">
        <h2>Sign Up Page</h2>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
        <p>May account na? <Link to="/login">Mag-login</Link></p>
      </form>
     
    </div>
  );
}

export default Signup;

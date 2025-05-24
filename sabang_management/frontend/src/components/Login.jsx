import "../styles/Auth.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BarangayImage from "../assets/Barangay.jpg"; // Make sure path is correct

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = (event) => {
    event.preventDefault();

    if (
      credentials.email === "Pentavision@gmail.com" &&
      credentials.password === "password"
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/home");
    } else if (
      credentials.email === "admin@gmail.com" &&
      credentials.password === "admin123"
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image" style={{ backgroundImage: `url(${BarangayImage})` }}></div>

        <div className="login-form">
          <h1 className="logo">Login</h1>
          <p className="subtitle">Sign into your account</p>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email-address"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="********"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
            <button type="submit">Login</button>
          </form>
          <div className="extras">
            <p>
              Don't have an account? <Link to="/signup">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

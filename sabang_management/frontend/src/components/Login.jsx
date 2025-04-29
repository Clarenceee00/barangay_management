import "../styles/Auth.css"; 
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import assets from "../assets/Icon.jfif";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent page reload

    // Dummy authentication logic (replace with real validation as needed)
    if (credentials.email === "Pentavision@gmail.com" && credentials.password === "password") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/home");
    } else if (credentials.email === "admin@gmail.com" && credentials.password === "admin123") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      backgroundImage: "url('src/assets/Barangay.jpg')",
      backgroundSize: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
        <p>Do you not have an account yet? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
  );
};

export default Login;

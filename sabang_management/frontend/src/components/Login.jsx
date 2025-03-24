import "../styles/Auth.css"; 
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import assets from "../assets/Icon.jfif";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent page reload

    // Dummy authentication logic
    if (credentials.username === "Pentavision" && credentials.password === "password") {
      localStorage.setItem("isAuthenticated", "true"); // Store auth state
      navigate("/home"); // Redirect to Landing Page
    }else if (credentials.username === "admin" && credentials.password === "admin123") {
      localStorage.setItem("isAuthenticated", "true"); 
      navigate("/dashboard");  
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div  style={{
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
      
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login Page</h2>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
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
        <p>Wala pang account? <Link to="/signup">Mag-sign up</Link></p>
      </form>
    </div>
  );
};

export default Login;

import "../styles/Auth.css"; 
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login button clicked!");
    navigate("/home"); 
};
  return (
    <div>
      <form className="auth-form ">
      <h2>Login Page</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <p>Wala pang account? <Link to="/signup">Mag-sign up</Link></p>
      </form>
      
    </div>
  );
}

export default Login;

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import "./home.css";

function Home() {
    const navigate = useNavigate();
    return (
        <>
        <Navbar/>
        <div className="home-container">
            <h1>WELCOME TO BARANGAY SABANG</h1>
        </div>
        </>
    );
}

export default Home;

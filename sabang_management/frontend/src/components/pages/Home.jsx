import React from 'react';
import Navbar from "../Navbar/navbar";

const Home = () => {
    // Sample data for projects with status
    const projects = [
        {
            id: 1,
            name: "Proyekto sa Pagsasaayos ng Daan",
            description: "Pag-aayos ng mga pangunahing daan sa barangay.",
            image: "https://files01.pna.gov.ph/source/2021/10/16/concreting.jpg",
            status: "Ongoing"
        },
        {
            id: 2,
            name: "Pagtatanim ng Puno",
            description: "Isang proyekto para sa mas berdeng barangay.",
            image: "https://www.vintagetreecare.com/wp-content/uploads/2023/06/planting-tree-1024x683.jpg",
            status: "Completed"
        },
        {
            id: 3,
            name: "Barangay Health Center",
            description: "Pagbuo ng bagong health center para sa mga residente.",
            image: "https://www.healthfuturesfoundation.com/wp-content/uploads/2020/11/Sun-Life-Proj-jpeg.jpg",
            status: "Ongoing"
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="home-container">
                <h1>WELCOME TO BARANGAY SABANG</h1>
                <div className="projects-container">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <img src={project.image} alt={project.name} />
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <p>Status: <strong>{project.status}</strong></p> {/* Display project status */}
                        </div>
                    ))}
                </div>
            </div>
            <style>
                {`
                    /* src/home.css */
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f9f9f9;
                    }

                    .home-container {
                        text-align: center;
                        padding: 20px;
                    }

                    .projects-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        margin-top: 20px;
                    }

                    .project-card {
                        border: 1px solid #ddd;
                        border-radius: 10px;
                        padding: 10px;
                        margin: 10px;
                        width: 300px;
                        text-align: center;
                        box-shadow: 0 0 10px rgba(1, 1, 10, 0.3);
                    }

                    .project-card img {
                        max-width: 100%;
                        border-radius: 10px;
                    }
                `}
            </style>
        </div>
    );
};

export default Home;
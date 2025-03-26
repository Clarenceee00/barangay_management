import React, { useState } from 'react';
import '../../AdminStyle/Project.css';
import Sidebar from '../../COM/Sidevar/Sidebar';

const ProjectUpload = () => {
  const [projectName, setProjectName] = useState('');
  const [projectStatus, setProjectStatus] = useState('Ongoing');
  const [projectDetails, setProjectDetails] = useState(''); // State for project details
  const [projectImage, setProjectImage] = useState(null); // State to hold the uploaded image
  const [projects, setProjects] = useState([]); // State to hold the list of projects

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjectImage(reader.result); // Set the image as a base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new project object
    const newProject = {
      name: projectName,
      status: projectStatus,
      details: projectDetails, // Include the details in the project object
      image: projectImage, // Include the image in the project object
    };

    // Add the new project to the projects array
    setProjects([...projects, newProject]);

    // Reset form
    setProjectName('');
    setProjectStatus('Ongoing');
    setProjectDetails(''); // Reset the details
    setProjectImage(null); // Reset the image
  };

  return (
    <>
      <Sidebar />
      <div className='dashboard'>
        <form onSubmit={handleSubmit}>
          <h2>Upload Project</h2>
          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
          <select
            value={projectStatus}
            onChange={(e) => setProjectStatus(e.target.value)}
          >
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
            <option value="Upcoming">Upcoming</option>
          </select>
          <textarea
            placeholder="Project Details"
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            required
          />
          <input 
            type="file" 
            name="file" 
            accept="image/*" 
            onChange={handleImageChange} 
          />
          <button type="submit">Upload</button>
        </form>

        <h2>Uploaded Projects</h2>
        <ul>
          {projects.length === 0 ? (
            <li>Walang na-upload na proyekto.</li>
          ) : (
            projects.map((project, index) => (
              <li key={index}>
                <h3>{project.name} - {project.status}</h3>
                <p>{project.details}</p> {/* Display project details */}
                {project.image && <img src={project.image} alt={project.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default ProjectUpload;
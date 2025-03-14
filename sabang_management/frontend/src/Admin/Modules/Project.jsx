import React from 'react'
import Sidebar from '../COM/Sidevar/Sidebar';
import ProjectUpload from './ProjectUpload/ProjectUpload';
import '../AdminStyle/Project.css'



export const Project = () => {
 
  const projects = [
    { name: 'Water Supply Improvement', status: 'Ongoing' },
    { name: 'Community Health Program', status: 'Completed' },
    { name: 'Road Repair', status: 'Upcoming' },
  ];

  return (
    <>
    <Sidebar/>
    <div className="dashboard">
      <h1>Barangay Management Project</h1>
      <ProjectUpload />
      <div className="projects">
      
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              {project.name} - <strong>{project.status}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
    

    </>
  )
}
export default Project;
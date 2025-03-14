import React, { useState } from 'react';

const ProjectUpload = () => {
  const [projectName, setProjectName] = useState('');
  const [projectStatus, setProjectStatus] = useState('Ongoing');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dito mo ilalagay ang logic para sa pag-upload ng proyekto
    console.log('Project Uploaded:', { projectName, projectStatus });
    // Reset form
    setProjectName('');
    setProjectStatus('Ongoing');
  };

  return (
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
      <input type="file" name="file"></input>
      <button type="submit">Upload</button>
    </form>
  );
};

export default ProjectUpload;
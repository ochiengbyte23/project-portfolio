import React from 'react'
import { useState } from "react";
import './App.css';
import Header from './components/Header.jsx'
import NewProject from './components/NewProject.jsx';
import ProjectListing from './components/ProjectListing.jsx';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of the project" },
    { id: 2, title: "Project 2", description: "Description of the project" },
    { id: 3, title: "Project 3", description: "Description of the project" }])



  const addProject = (title, description) => {
    const newProject = {
      id: Date.now(), // Simple unique ID
      title: title,
      description: description
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div>
      <Header />
      <div className="app-container">
        <NewProject onAddProject={addProject} />
        <ProjectListing projects={projects} />
      </div>

    </div>
  )
}

export default App;

import React from "react";
import { useState } from "react";

function ProjectListing({ projects }) {
    const [searchText, setSearchText] = useState("");

    const filteredProjects = projects.filter((project) => {
        return project.title.toLowerCase().includes(searchText.toLowerCase())
    });

    return (
        <div className="NewProjectStyle">
            <input
                type="text"
                placeholder="Search Projects"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} >
            </input>

            {filteredProjects.map((project) => (
                <div key={project.id} className="project-item">
                    <span style={{ display: "flex", flexDirection: "row" }} >✕</span>
                    <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectListing;
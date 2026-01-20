import React from "react";
import { useState } from "react";

function NewProject({ onAddProject }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAdd = () => {
        if (title.trim() && description.trim()) {
            onAddProject(title, description);
            setTitle("");
            setDescription("");
        }
    };

    return (
        <div className="NewProjectStyle"  >
            <h3>Add Project</h3>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} ></input>
            <label>Description</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} ></input>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default NewProject;
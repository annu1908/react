import React from "react";
import './Project.css'
function Project(){
    return(
        <>
         <div className="projects-section">
            <h2>My Projects</h2>
            <div className="project-item">
                <h3>To-do List</h3>
                <p>A simple and interactive task manager built using HTML,CSS and Javascript.User can add a task
                    ,remove a task and mark as completed.
                </p>
            </div>
            <div className="project-item">
                <h3>Resume Builder</h3>
                <p>A beginner-friendly resume generator made using HTML,CSS and Javascript.User can input their details and generate a
                    formatted resume instantly.Demonstrates DOM manipulation and basic form handling.
                </p>
            </div>
            
         </div>
         </>
       
    )
}
export default Project;
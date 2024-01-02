/** @format */

import React, { useEffect, useState } from "react";
import "./project.css";
import Project from "./JSON/projects.json";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(Project);
  }, []);
  return (
    <div className="project-wrapper">
      <div className="project-header container">
        <h3>Projects</h3>
        <a id="link" href="https://github.com/jeyaprakashp4587?tab=repositories">View more...</a>
      </div>
      <div className="project container">
        {projects.map((item, index) => (
          <div className="project-box" key={index}>
            {/* project img */}
            <div className="project-img">
              <img src={item.img} alt="" />
            </div>
            {/* project-details */}
            <div className="project-details">
              <h3>{item.name}</h3>
              <button>
                <a href={item.link}>Live link</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

import React from "react";
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'


function ProjectList({projects}) {
  return (
    <div className="project-list section">
        {projects ? projects.map(project => (
           <div key={project.id}>
           <Link to={'/project/' + project.id}>
          <ProjectSummary project={project}/>
          </Link>
          </div>
        )) : <div>No Projects</div>}
    </div>
  );
}

export default ProjectList;

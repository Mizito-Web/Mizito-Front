import React from 'react';
import './ProjectCard.module.css';

const ProjectCard = ({ project }) => (
    <div className="project-card">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <span>Status: {project.status}</span>
    </div>
);

export default ProjectCard;

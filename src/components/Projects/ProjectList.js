import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectList.module.css';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project) => (
                <div key={project.id} className="project-card bg-white shadow-md p-4 rounded-lg">
                    <h2 className="text-lg font-bold">{project.name}</h2>
                    <p className="text-gray-600">{project.description}</p>
                    <Link to={`/projects/${project.id}`} className="text-blue-500">View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectDetails } from '../../services/projectService';  // Assuming this service is created
import './ProjectDetails.module.css';

const ProjectDetails = () => {
    const { projectId } = useParams();  // Get the project ID from the URL
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            const projectData = await getProjectDetails(projectId);
            setProject(projectData);
        };
        fetchProject();
    }, [projectId]);

    if (!project) return <div>Loading...</div>;

    return (
        <div className="project-details">
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <p>Status: {project.status}</p>
            <div>
                <h2>Tasks</h2>
                {/* Render tasks related to the project */}
            </div>
            <div>
                <h2>Team Members</h2>
                {/* Render team members */}
            </div>
        </div>
    );
};

export default ProjectDetails;

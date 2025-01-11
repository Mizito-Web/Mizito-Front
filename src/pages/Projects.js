// pages/Projects.js
import React, { useState, useEffect } from 'react';
import ProjectList from '../components/Projects/ProjectList'; // Assuming you have ProjectList component
import { getProjects } from '../services/projectService';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const projectsData = await getProjects();
            setProjects(projectsData);
        };

        fetchProjects();
    }, []);

    return (
        <MainLayout>
            <h2 className="text-2xl font-bold mb-6">All Projects</h2>
            <ProjectList projects={projects} />
        </MainLayout>
    );
};

export default Projects;

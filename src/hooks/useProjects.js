import { useState, useEffect } from 'react';
import { getProjects, createProject, updateProject, deleteProject } from '../services/projectService'; // Assuming projectService is set up

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectsData = await getProjects(); // Fetch projects from the backend
                setProjects(projectsData);
            } catch (err) {
                setError('Failed to load projects.');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const addProject = async (projectData) => {
        try {
            const newProject = await createProject(projectData); // Create a new project
            setProjects((prevProjects) => [...prevProjects, newProject]);
        } catch (err) {
            setError('Failed to add project.');
        }
    };

    const editProject = async (projectId, updatedProjectData) => {
        try {
            const updatedProject = await updateProject(projectId, updatedProjectData); // Update an existing project
            setProjects((prevProjects) =>
                prevProjects.map((project) =>
                    project.id === projectId ? { ...project, ...updatedProject } : project
                )
            );
        } catch (err) {
            setError('Failed to update project.');
        }
    };

    const removeProject = async (projectId) => {
        try {
            await deleteProject(projectId); // Delete a project
            setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
        } catch (err) {
            setError('Failed to delete project.');
        }
    };

    return {
        projects,
        loading,
        error,
        addProject,
        editProject,
        removeProject,
    };
};

export default useProjects;

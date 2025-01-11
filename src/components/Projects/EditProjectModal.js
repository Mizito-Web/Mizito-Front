import React, { useState, useEffect } from 'react';
import { getProjectDetails, updateProject } from '../../services/projectService';  // Assuming this service is created
import './EditProjectModal.module.css';

const EditProjectModal = ({ projectId, onClose, onUpdateProject }) => {
    const [formData, setFormData] = useState({ name: '', description: '', status: '' });

    useEffect(() => {
        const fetchProject = async () => {
            const project = await getProjectDetails(projectId);
            setFormData({ name: project.name, description: project.description, status: project.status });
        };
        fetchProject();
    }, [projectId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProject = await updateProject(projectId, formData);  // API call to update project
        onUpdateProject(updatedProject);  // Update the parent component with the updated project
        onClose();  // Close the modal
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Edit Project</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Project Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Project Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Save Changes</button>
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default EditProjectModal;

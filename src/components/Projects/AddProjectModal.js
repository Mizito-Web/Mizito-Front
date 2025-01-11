import React, { useState } from 'react';
import './AddProjectModal.module.css';

const AddProjectModal = ({ onSubmit, onClose }) => {
    const [formData, setFormData] = useState({ name: '', description: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Create New Project</h2>
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
                    <button type="submit">Add Project</button>
                </form>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default AddProjectModal;

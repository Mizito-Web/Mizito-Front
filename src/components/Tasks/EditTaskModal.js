import React, { useState, useEffect } from 'react';
import './EditTaskModal.module.css';

const EditTaskModal = ({ task, onClose, onSave }) => {
    const [taskData, setTaskData] = useState({ ...task });

    useEffect(() => {
        setTaskData({ ...task });
    }, [task]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(taskData); // Save the updated task
        onClose(); // Close the modal
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Task Name"
                        value={taskData.name}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Task Description"
                        value={taskData.description}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="assignee"
                        placeholder="Assignee"
                        value={taskData.assignee}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border rounded"
                    />
                    <input
                        type="date"
                        name="dueDate"
                        value={taskData.dueDate}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border rounded"
                    />
                    <button type="submit" className="py-2 px-6 bg-orange-500 text-white rounded hover:bg-orange-600">
                        Save Changes
                    </button>
                </form>
                <button onClick={onClose} className="mt-4 py-2 px-6 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditTaskModal;

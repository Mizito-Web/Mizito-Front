import React, { useState } from 'react';
import './AddTaskModal.module.css';

const AddTaskModal = ({ onClose, onAddTask }) => {
    const [taskData, setTaskData] = useState({
        name: '',
        description: '',
        assignee: '',
        status: 'pending',
        dueDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(taskData); // Call the parent function to add task
        onClose(); // Close the modal after adding the task
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
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
                        Add Task
                    </button>
                </form>
                <button onClick={onClose} className="mt-4 py-2 px-6 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default AddTaskModal;

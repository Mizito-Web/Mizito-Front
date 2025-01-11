import React from 'react';
import './TaskCard.module.css';

const TaskCard = ({ task, onEdit }) => {
    return (
        <div className="task-card p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold">{task.name}</h3>
            <p className="text-sm text-gray-600">Assigned to: {task.assignee}</p>
            <p className="text-sm text-gray-600">Status: {task.status}</p>
            <p className="text-sm text-gray-600">Due Date: {task.dueDate}</p>
            <button
                onClick={() => onEdit(task)}
                className="mt-4 py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Edit Task
            </button>
        </div>
    );
};

export default TaskCard;

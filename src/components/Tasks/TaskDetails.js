import React from 'react';
import './TaskDetails.module.css';

const TaskDetails = ({ task }) => {
    return (
        <div className="task-details p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold">{task.name}</h2>
            <p className="text-sm text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-600">Assigned to: {task.assignee}</p>
            <p className="text-sm text-gray-600">Status: {task.status}</p>
            <p className="text-sm text-gray-600">Due Date: {task.dueDate}</p>
            
            {/* Add Comments Section */}
            <div className="comments mt-4">
                <h3 className="text-lg font-semibold">Comments</h3>
                <ul className="space-y-2">
                    {task.comments.map((comment, index) => (
                        <li key={index} className="bg-gray-100 p-3 rounded-md">
                            <p>{comment.user}: {comment.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskDetails;

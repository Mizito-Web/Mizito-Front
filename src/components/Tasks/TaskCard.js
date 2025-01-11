// src/components/Dashboard/TaskCard.js
import React from 'react';

const TaskCard = ({ task, onMarkDone }) => {
  return (
    <div className="flex items-center justify-between bg-white border rounded-lg p-4 mb-4 shadow-sm">
      {/* Task Type Badge */}
      <div className="flex items-center">
        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-lg mr-4">
          {task.type} {/* Example: "Project" */}
        </span>

        {/* Task Description */}
        <div>
          <h3 className="font-medium text-gray-900">{task.title}</h3>
          <p className="text-sm text-gray-600 truncate max-w-xl">{task.description}</p>
        </div>
      </div>

      {/* Status and Checkbox */}
      <div className="flex items-center">
        <span className={`px-4 py-1 text-sm font-medium rounded-lg ${
          task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
        }`}>
          {task.status}
        </span>

        {/* Checkbox */}
        <input
          type="checkbox"
          className="ml-4 w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
          onChange={() => onMarkDone(task.id)}
          checked={task.done}
        />
      </div>
    </div>
  );
};

export default TaskCard;

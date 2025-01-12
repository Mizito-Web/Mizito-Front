// src/components/Dashboard/TaskCard.js
import React from 'react';

// Helper function to truncate text
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

const TaskCard = ({ task, onMarkDone }) => {
  return (
    <div className="flex flex-col bg-white border rounded-lg p-3 mb-3 shadow-sm">
      {/* Task Title */}
      <div>
        <h3 className="font-medium text-gray-900 text-sm mb-1">{task.title}</h3>
        <p className="text-xs text-gray-600 truncate overflow-hidden max-h-10">
          {truncateText(task.details || 'No details available', 100)}
        </p>
      </div>

      {/* Checkbox */}
      <div className="flex justify-end mt-2">
        <input
          type="checkbox"
          className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-400"
          onChange={() => onMarkDone(task.id)}
          checked={task.done}
        />
      </div>
    </div>
  );
};

export default TaskCard;

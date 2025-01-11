
import React from 'react';

const ProjectProgress = ({ progressData }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Project:</h3>
        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-lg">
          {progressData.type} {/* Example: "General Project" */}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">
          Remaining Tasks: {progressData.remainingTasks}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${progressData.completionPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Task Statistics */}
      <div className="text-sm text-gray-600 space-x-4">
        <span>
          <strong>{progressData.completedTasks}</strong> Completed
        </span>
        <span>
          <strong>{progressData.delayedTasks}</strong> Delayed
        </span>
        <span>
          <strong>{progressData.noTimeTasks}</strong> No Time
        </span>
        <span>
          <strong>{progressData.remainingTasks}</strong> Remaining
        </span>
      </div>
    </div>
  );
};

export default ProjectProgress;

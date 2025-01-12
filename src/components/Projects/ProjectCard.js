import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="bg-white border rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      {/* Project Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <span className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-lg">
          {project.type || 'General Project'}
        </span>
      </div>

      {/* Project Progress */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-1">
          وضعیت کل پروژه: {project.completionPercentage}%
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${project.completionPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Task Progress */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-1">وظایف من: {project.taskProgress}%</p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${project.taskProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Last Task Info */}
      <p className="text-xs text-gray-500">
        آخرین وظیفه انجام شده: {project.lastTask || 'نامشخص'}
      </p>
    </div>
  );
};

export default ProjectCard;

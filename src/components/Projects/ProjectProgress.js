import React from 'react';

const ProjectProgress = ({ projects }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-4">Project Progress</h3>
      {projects.length > 0 ? (
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="border-b pb-4">
              {/* Header Section */}
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">{project.name}</h4>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-lg">
                  {project.type}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-2">
                <p className="text-xs text-gray-600 mb-1">
                  Remaining Tasks: {project.remainingTasks}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{ width: `${project.completionPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Task Statistics */}
              <div className="text-xs text-gray-600 flex flex-wrap gap-4">
                <span>
                  <strong>{project.completedTasks}</strong> Completed
                </span>
                <span>
                  <strong>{project.delayedTasks}</strong> Delayed
                </span>
                <span>
                  <strong>{project.noTimeTasks}</strong> No Time
                </span>
                <span>
                  <strong>{project.remainingTasks}</strong> Remaining
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-sm">No projects available.</p>
      )}
    </div>
  );
};

export default ProjectProgress;

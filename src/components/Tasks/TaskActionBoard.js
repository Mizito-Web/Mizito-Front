// src/components/Dashboard/TaskActionBoard.js
import React from 'react';

const TaskActionBoard = ({ tasks, followUpTasks, onTaskDone }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      {/* My Tasks (Green Column) */}
      <div className="bg-green-100 p-4 rounded shadow">
        <h3 className="text-lg font-bold text-green-800 mb-4">کارهای من ({tasks.length} مورد)</h3>
        {tasks.length > 0 ? (
          <ul className="space-y-2">
            {tasks.slice(0, 10).map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center bg-white p-2 rounded shadow-sm hover:bg-gray-100"
              >
                <span className="text-gray-700">{task.title}</span>
                <input
                  type="checkbox"
                  className="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-400"
                  onChange={() => onTaskDone(task.id)}
                  checked={task.done}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">هیچ کاری برای انجام ندارید</p>
        )}
      </div>

      {/* Follow-Up Tasks (Red Column) */}
      <div className="bg-red-100 p-4 rounded shadow">
        <h3 className="text-lg font-bold text-red-800 mb-4">پیگیری از دیگران</h3>
        {followUpTasks.length > 0 ? (
          <ul className="space-y-2">
            {followUpTasks.map((task) => (
              <li
                key={task.id}
                className="bg-white p-2 rounded shadow-sm hover:bg-gray-100"
              >
                <span className="text-gray-700">{task.title}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">کاری برای پیگیری ندارید</p>
        )}
      </div>
    </div>
  );
};

export default TaskActionBoard;

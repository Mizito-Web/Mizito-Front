import React from 'react';
import './TaskSummary.module.css';

const TaskSummary = ({ tasks }) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === 'completed').length;
    const pendingTasks = tasks.filter(task => task.status === 'pending').length;
    const overdueTasks = tasks.filter(task => task.status === 'overdue').length;

    return (
        <div className="task-summary p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Task Summary</h2>
            <div className="task-stats grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="task-stat bg-blue-500 text-white p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold">Total Tasks</h3>
                    <p className="text-2xl">{totalTasks}</p>
                </div>
                <div className="task-stat bg-green-500 text-white p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold">Completed</h3>
                    <p className="text-2xl">{completedTasks}</p>
                </div>
                <div className="task-stat bg-yellow-500 text-white p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold">Pending</h3>
                    <p className="text-2xl">{pendingTasks}</p>
                </div>
                <div className="task-stat bg-red-500 text-white p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold">Overdue</h3>
                    <p className="text-2xl">{overdueTasks}</p>
                </div>
            </div>
        </div>
    );
};

export default TaskSummary;

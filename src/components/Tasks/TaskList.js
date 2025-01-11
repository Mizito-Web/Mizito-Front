import React from 'react';
import TaskCard from './TaskCard';
import './TaskList.module.css';

const TaskList = ({ tasks, onEditTask }) => {
    return (
        <div className="task-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} onEdit={onEditTask} />
            ))}
        </div>
    );
};

export default TaskList;

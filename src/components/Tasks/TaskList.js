import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onMarkDone }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onMarkDone={onMarkDone} />
      ))}
    </div>
  );
};

export default TaskList;

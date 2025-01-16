import React, { useState } from 'react';
import TaskList from '../Tasks/TaskList';

const ProjectTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'دعوت از دوستان و همکاران', details: 'هر وقت خواستی همکارانت رو به میزکارت دعوت کنی', done: false },
    { id: 2, title: 'مشاهده بخش نامه‌ها', details: 'نامه‌ها معمولاً برای کارهای رسمی استفاده میشن', done: false },
    { id: 3, title: 'مشاهده بخش یادداشت‌ها', details: 'یادداشت‌ها کاملاً شخصی هستند', done: false },
  ]);

  const [filter, setFilter] = useState('all'); // Filter state: 'all', 'done', or 'undone'

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.done;
    if (filter === 'undone') return !task.done;
    return true; // 'all'
  });

  const handleMarkDone = async (taskId, currentStatus) => {
    const newStatus = currentStatus === 'done' ? 'undone' : 'done'; // Toggle status
  
    try {
      // Update in backend
      await updateTaskStatus(taskId, newStatus);
  
      // Update in frontend
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );
    } catch (error) {
      console.error('Failed to update task status:', error);
      alert('Error updating task status.');
    }
  };
  

  return (
    <div>
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">کارهای پروژه</h2>
        {/* Filter Dropdown */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <label htmlFor="filter" className="text-gray-600 text-sm">نمایش:</label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded text-sm"
          >
            <option value="all">همه</option>
            <option value="done">انجام شده</option>
            <option value="undone">انجام نشده</option>
          </select>
        </div>
      </div>

      {/* Task List */}
      <TaskList tasks={filteredTasks} onMarkDone={handleMarkDone} />
    </div>
  );
};

export default ProjectTasks;

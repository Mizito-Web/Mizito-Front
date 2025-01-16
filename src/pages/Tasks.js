import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TaskList from '../components/Tasks/TaskList'; // Task list for tasks display
import TaskForm from '../components/Tasks/TaskForm';
import { getTasks, createTask } from '../services/apiClient'; // Import API functions

const Tasks = () => {
  const [tasks, setTasks] = useState([]); // Task data
  const [showTaskForm, setShowTaskForm] = useState(false); // Show/Hide form
  const location = useLocation(); // Get query params from URL
  const query = new URLSearchParams(location.search);
  const filter = query.get('filter') || 'all'; // Read filter from URL or default to 'all'

  useEffect(() => {
    // Fetch tasks from the backend
    const fetchTasks = async () => {
      try {
        const tasksData = await getTasks(); // Fetch tasks from the backend
        setTasks(tasksData); // Set tasks in state
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  // Function to add a new task
  const handleAddTask = async (newTask) => {
    try {
      const createdTask = await createTask(newTask); // Send task to backend
      setTasks((prevTasks) => [...prevTasks, createdTask]); // Add to local state
      setShowTaskForm(false); // Close the form
    } catch (error) {
      console.error('Failed to create task:', error);
      alert('Error creating task.');
    }
  };

  // Apply filter logic based on query parameter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.done;
    if (filter === 'undone') return !task.done;
    if (filter === 'today') return task.isToday;
    if (filter === 'trackable') return task.isTrackable;
    if (filter === 'delayed') return task.isDelayed;
    return true; // Show all tasks by default
  });

  return (
    <div className="tasks p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-700">کارهای من</h2>
        <button
          onClick={() => setShowTaskForm(true)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          ایجاد وظیفه +
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <label className="text-gray-600">نمایش:</label>
          <select
            value={filter}
            onChange={(e) => {
              const newFilter = e.target.value;
              const url = newFilter === 'all' ? '/tasks' : `/tasks?filter=${newFilter}`;
              window.history.pushState({}, '', url); // Update URL without reloading
            }}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-200"
          >
            <option value="all">همه وظایف</option>
            <option value="undone">وظایف انجام نشده</option>
            <option value="done">وظایف انجام شده</option>
            <option value="today">کارهای امروز</option>
            <option value="trackable">کارهای قابل پیگیری</option>
            <option value="delayed">کارهای دارای تأخیر</option>
          </select>
        </div>
      </div>

      {/* Task Form Modal */}
      {showTaskForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <TaskForm onSubmit={handleAddTask} onCancel={() => setShowTaskForm(false)} />
          </div>
        </div>
      )}

      {/* Task List */}
      <TaskList tasks={filteredTasks} onMarkDone={() => {}} />
    </div>
  );
};

export default Tasks;

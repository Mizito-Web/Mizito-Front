import React, { useState, useEffect } from 'react';
import TaskList from '../components/Tasks/TaskList'; // Task list for tasks display
// import { getTasks } from '../services/taskService'; // Uncomment when backend is implemented
import TaskForm from '../components/Tasks/TaskForm';
const Tasks = () => {
  const [tasks, setTasks] = useState([]); // Task data
  const [filter, setFilter] = useState('all'); // Task filter: 'all', 'done', 'undone'
  const [showTaskForm, setShowTaskForm] = useState(false); // Show/Hide form

  useEffect(() => {
    // Mock Data for Tasks
    const mockTasks = [
      { id: 1, title: 'دعوت از دوستان و همکاران', done: false, details: 'تنظیم دعوت‌نامه‌ها برای همکاران' },
      { id: 2, title: 'مشاهده بخش نامه‌ها', done: false, details: 'بررسی نامه‌های رسمی برای ارسال گزارش‌ها' },
      { id: 3, title: 'مشاهده بخش یادداشت‌ها', done: true, details: 'مشاهده و ویرایش یادداشت‌های شخصی' },
    ];

    // Simulate API call with mock data
    const fetchTasks = async () => {
      // const tasksData = await getTasks(); // Uncomment when backend is ready
      const tasksData = mockTasks; // Use mock data
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Function to mark a task as done or undone
  const handleMarkDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  // Function to add a new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, done: false }]);
    setShowTaskForm(false);
  };

  // Apply filter logic
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.done;
    if (filter === 'undone') return !task.done;
    return true; // 'all'
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
            onChange={handleFilterChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-200"
          >
            <option value="all">همه وظایف</option>
            <option value="undone">وظایف انجام نشده</option>
            <option value="done">وظایف انجام شده</option>
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
      <TaskList tasks={filteredTasks} onMarkDone={handleMarkDone} />
    </div>
  );
};

export default Tasks;

import React, { useState, useEffect } from 'react';
import ProfileInfo from '../components/Profile/ProfileInfo';
import TaskSummary from '../components/Tasks/TaskSummary';
import ProjectProgress from '../components/Projects/ProjectProgress';
import TaskActionBoard from '../components/Tasks/TaskActionBoard';
import DashboardList from '../components/Dashboard/DashboardList';
import { 
  getUserProfile, 
  getProjects, 
  getTasks, 
  getDashboards, 
  getMessages, 
  createDashboard 
} from '../services/apiClient'; 
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null); // User data
  const [projects, setProjects] = useState([]); // Project data
  const [tasks, setTasks] = useState([]); // Task data
  const [dashboards, setDashboards] = useState([]); // Dashboard list
  const [messages, setMessages] = useState([]); // Messages
  const [followUpTasks, setFollowUpTasks] = useState([]); // Placeholder for follow-up tasks
  const [showDashboardForm, setShowDashboardForm] = useState(false); // Show/Hide dashboard form
  const [newDashboardName, setNewDashboardName] = useState(''); // New dashboard name

  const navigate = useNavigate(); // Navigation hook

  // Handle Task Completion
  const handleTaskDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  // Handle Profile Save
  const handleSaveProfile = (updatedUser) => {
    setUser(updatedUser);
    console.log('Profile updated:', updatedUser);
  };

  // Handle Selecting a Dashboard
  const handleSelectDashboard = (dashboardId) => {
    navigate(`/dashboards/${dashboardId}`); // Redirect to the selected dashboard
  };

  // Handle Adding a New Dashboard
  const handleAddDashboard = async () => {
    if (!newDashboardName.trim()) {
      alert('Dashboard name cannot be empty.');
      return;
    }

    try {
      const newDashboard = await createDashboard({ name: newDashboardName }); // Send to backend
      setDashboards((prevDashboards) => [...prevDashboards, newDashboard]); // Update state
      setShowDashboardForm(false); // Close form
      setNewDashboardName(''); // Reset form
    } catch (error) {
      console.error('Error creating dashboard:', error);
      alert('Failed to create dashboard. Please try again.');
    }
  };

  // Fetch Data from Backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userProfile, projectList, taskList, dashboardList, messageList] = await Promise.all([
          getUserProfile(),
          getProjects(),
          getTasks(),
          getDashboards(),
          getMessages(),
        ]);

        setUser(userProfile);
        setProjects(projectList);
        setTasks(taskList);
        setDashboards(dashboardList);
        setMessages(messageList);

        // Filter follow-up tasks
        setFollowUpTasks(taskList.filter((task) => task.isTrackable));
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter tasks for today
  const todayTasks = tasks.filter((task) => {
    const today = new Date();
    const taskDate = new Date(task.dueDate); // Assuming `dueDate` is a field in the task
    return (
      taskDate.getFullYear() === today.getFullYear() &&
      taskDate.getMonth() === today.getMonth() &&
      taskDate.getDate() === today.getDate()
    );
  });

  return (
    <div className="grid grid-cols-12 gap-6 p-4">
      {/* Main Content */}
      <div className="col-span-12 lg:col-span-9 bg-gray-50 p-4 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        {/* Task Summary Section */}
        <TaskSummary
          messagesCount={messages.length}
          todayTasksCount={todayTasks.length}
          followUpTasksCount={followUpTasks.length}
          delayedTasksCount={tasks.filter((task) => task.isDelayed).length}
          onMessageClick={() => navigate('/chat')}
          onTodayTasksClick={() => navigate('/tasks?filter=today')}
          onFollowUpTasksClick={() => navigate('/tasks?filter=trackable')}
          onDelayedTasksClick={() => navigate('/tasks?filter=delayed')}
        />

        {/* Task Action Board */}
        <TaskActionBoard
          tasks={tasks}
          followUpTasks={followUpTasks}
          onTaskDone={handleTaskDone}
        />
        <div className="mt-8">
          {/* Project Progress Section */}
          <ProjectProgress projects={projects} />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3 flex-col gap-6 hidden lg:flex">
        {/* Profile Info */}
        {user && (
          <div className="bg-white rounded shadow-md p-4">
            <ProfileInfo user={user} onSave={handleSaveProfile} />
          </div>
        )}

        {/* Dashboard List */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-lg font-bold mb-4">Your Dashboards</h2>
      

          <DashboardList
            dashboards={dashboards}
            onSelect={handleSelectDashboard}
          />

          {/* Dashboard Creation Form Modal */}
          {showDashboardForm && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded shadow-lg w-96">
                <h3 className="text-lg font-bold mb-4">Create New Dashboard</h3>
                <input
                  type="text"
                  placeholder="Enter dashboard name"
                  value={newDashboardName}
                  onChange={(e) => setNewDashboardName(e.target.value)}
                  className="w-full p-2 border rounded mb-4"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={handleAddDashboard}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Create
                  </button>
                  <button
                    onClick={() => setShowDashboardForm(false)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

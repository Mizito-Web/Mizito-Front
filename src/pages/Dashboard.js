import React, { useEffect, useState } from 'react';
import ProfileInfo from '../components/Profile/ProfileInfo';
import TaskSummary from '../components/Tasks/TaskSummary';
import ProjectProgress from '../components/Projects/ProjectProgress';
import TaskActionBoard from '../components/Tasks/TaskActionBoard';
import DashboardList from '../components/Dashboard/DashboardList';
import { getUserProfile, getProjects, getTasks, getDashboards } from '../services/apiClient'; // Import service functions

const Dashboard = () => {
  const [user, setUser] = useState(null); // User data
  const [projects, setProjects] = useState([]); // Project data
  const [tasks, setTasks] = useState([]); // Task data
  const [dashboards, setDashboards] = useState([]); // Dashboard list
  const [followUpTasks, setFollowUpTasks] = useState([]); // Placeholder for follow-up tasks

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
    // Optionally, send the updated profile to the backend
  };

  // Handle Adding a New Dashboard
  const handleAddDashboard = (newDashboard) => {
    setDashboards((prevDashboards) => [...prevDashboards, newDashboard]);
    // Optionally, send the new dashboard to the backend
  };

  // Handle Selecting a Dashboard
  const handleSelectDashboard = (dashboardId) => {
    console.log(`Selected dashboard ID: ${dashboardId}`);
    // Redirect to the selected dashboard (e.g., using React Router)
  };

  // Fetch Data from Backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userProfile, projectList, taskList, dashboardList] = await Promise.all([
          getUserProfile(), // Fetch user profile
          getProjects(), // Fetch projects
          getTasks(), // Fetch tasks
          getDashboards(), // Fetch dashboards
        ]);

        setUser(userProfile);
        setProjects(projectList);
        setTasks(taskList);
        setDashboards(dashboardList);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6 p-4">
      {/* Main Content */}
      <div className="col-span-12 lg:col-span-9 bg-gray-50 p-4 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        {/* Task Summary Section */}
        <TaskSummary tasks={tasks} />
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
            onAdd={handleAddDashboard}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

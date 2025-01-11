import React, { useEffect, useState } from 'react';
import ProfileInfo from '../components/Profile/ProfileInfo';
import TaskSummary from '../components/Tasks/TaskSummary';
import ProjectProgress from '../components/Projects/ProjectProgress';
import TaskActionBoard from '../components/Tasks/TaskActionBoard';
import DashboardList from '../components/Dashboard/DashboardList';

const Dashboard = () => {
  // User State
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/avatar.png', // Replace with your sample avatar
  });

  // Project Progress State
  const [progressData, setProgressData] = useState(null);

  // Tasks State
  const [tasks, setTasks] = useState([
    { id: 1, title: 'دعوت از دوستان و همکاران', done: false },
    { id: 2, title: 'مشاهده بخش نامه‌ها', done: false },
    { id: 3, title: 'مشاهده بخش یادداشت‌ها', done: false },
    { id: 4, title: 'یک تسک دیگر برای تست', done: true },
  ]);

  // Follow-Up Tasks State
  const [followUpTasks, setFollowUpTasks] = useState([]);

  // Dashboards State
  const [dashboards, setDashboards] = useState([
    {
      id: 1,
      name: 'Company Dashboard',
      itemCount: 3,
      colleagues: [{ initials: 'JD', online: true }],
    },
    {
      id: 2,
      name: 'Team Dashboard',
      itemCount: 5,
      colleagues: [{ initials: 'MS', online: false }],
    },
  ]);

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

  // Handle Adding a New Dashboard
  const handleAddDashboard = (newDashboard) => {
    setDashboards((prevDashboards) => [...prevDashboards, newDashboard]);
  };

  // Handle Selecting a Dashboard
  const handleSelectDashboard = (dashboardId) => {
    console.log(`Selected dashboard ID: ${dashboardId}`);
  };

  useEffect(() => {
    // Simulate fetching project progress data
    const fetchProgressData = async () => {
      const data = await new Promise((resolve) =>
        setTimeout(() => {
          resolve({
            type: 'General Project',
            remainingTasks: 10,
            completionPercentage: 80,
            completedTasks: 20,
            delayedTasks: 5,
            noTimeTasks: 3,
          });
        }, 1000)
      );
      setProgressData(data);
    };

    fetchProgressData();

    // Simulate fetching follow-up tasks
    const fetchFollowUpTasks = async () => {
      const data = await new Promise((resolve) =>
        setTimeout(() => resolve([]), 1000)
      );
      setFollowUpTasks(data);
    };

    fetchFollowUpTasks();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6 p-4">
      {/* Main Content */}
      <div className="col-span-9 bg-gray-50 p-4 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        {/* Task Summary Section */}
        <TaskSummary />
        {/* Task Action Board */}
        <TaskActionBoard
          tasks={tasks}
          followUpTasks={followUpTasks}
          onTaskDone={handleTaskDone}
        />
        <div className="mt-8">
          {/* Project Progress Section */}
          {progressData ? (
            <ProjectProgress progressData={progressData} />
          ) : (
            <p>Loading project data...</p>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3 flex flex-col gap-6">
        {/* Profile Info */}
        <div className="bg-white rounded shadow-md p-4">
          <ProfileInfo user={user} onSave={handleSaveProfile} />
        </div>

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

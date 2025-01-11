import React, { useEffect, useState } from 'react';
import ProfileInfo from '../components/Profile/ProfileInfo';
import TaskSummary from '../components/Tasks/TaskSummary';
import ProjectProgress from '../components/Projects/ProjectProgress';
import DashboardList from '../components/Dashboard/DashboardList';

const Dashboard = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/avatar.png',
  });

  const [progressData, setProgressData] = useState(null);

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

  const handleSaveProfile = (updatedUser) => {
    setUser(updatedUser);
    console.log('Profile updated:', updatedUser);
  };

  const handleAddDashboard = (newDashboard) => {
    setDashboards((prevDashboards) => [...prevDashboards, newDashboard]);
  };

  const handleSelectDashboard = (dashboardId) => {
    console.log(`Selected dashboard ID: ${dashboardId}`);
  };

  useEffect(() => {
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
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6 p-6">
      {/* Main Content */}
      <div className="col-span-9 bg-gray-50 p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Task Summary Section */}
        <div className="mb-6">
          <TaskSummary />
        </div>

        {/* Project Progress Section */}
        <div>
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

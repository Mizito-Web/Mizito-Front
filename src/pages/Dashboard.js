import React, { useEffect,useState } from 'react';
import ProfileInfo from '../components/Profile/ProfileInfo';
import TaskSummary from '../components/Tasks/TaskSummary';
import ProjectProgress from '../components/Projects/ProjectProgress';

const Dashboard = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: '/avatar.png', // Replace with your sample avatar
    });
    const [progressData, setProgressData] = useState(null);

    const handleSaveProfile = (updatedUser) => {
        // Update the user state with the new data
        setUser(updatedUser);
        console.log('Profile updated:', updatedUser);
    };

     useEffect(() => {
    // Simulate API call
    const fetchProgressData = async () => {
      const data = await new Promise((resolve) =>
        setTimeout(() => {
          resolve({
            type: "General Project",
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
        <div className="grid grid-cols-12 gap-6 p-4">
            {/* Main Content */}
            <div className="col-span-9 bg-gray-50 p-4 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
                {/* Task Summary Section */}
                <TaskSummary/>
                <div className="mt-8">
                    {/* Project Progress Section */}
                    {progressData ? (
                        <ProjectProgress progressData={progressData} />
                      ) : (
                        <p>Loading project data...</p>
                      )}
                </div>
            </div>

            {/* Right Sidebar: Profile Info */}
            <div className="col-span-3 bg-white rounded shadow-md p-4">
                <ProfileInfo user={user} onSave={handleSaveProfile} />
            </div>
        </div>
    );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import ProjectProgress from "../components/Projects/ProjectProgress";

const Dashboard = () => {
  const [progressData, setProgressData] = useState(null);

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
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {progressData ? (
        <ProjectProgress progressData={progressData} />
      ) : (
        <p>Loading project data...</p>
      )}
    </div>
    
  );
};

export default Dashboard;

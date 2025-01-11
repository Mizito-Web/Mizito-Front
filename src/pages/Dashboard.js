// pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import TaskSummary from '../components/Dashboard/TaskSummary';
import ActivityFeed from '../components/Dashboard/ActivityFeed';
import { getTasks, getActivities } from '../services/projectService'; // Assuming services are set up

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const tasksData = await getTasks();
            const activitiesData = await getActivities();
            setTasks(tasksData);
            setActivities(activitiesData);
        };

        fetchData();
    }, []);

    return (
        <MainLayout>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <TaskSummary tasks={tasks} />
                <ActivityFeed activities={activities} />
            </div>
        </MainLayout>
    );
};

export default Dashboard;

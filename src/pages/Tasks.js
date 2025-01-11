import React, { useState, useEffect } from 'react';
import TaskList from '../components/Tasks/TaskList';
import { getTasks } from '../services/taskService'; // Assuming a task service is in place

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const tasksData = await getTasks();
            setTasks(tasksData);
        };

        fetchTasks();
    }, []);

    const handleEditTask = (task) => {
        // Logic to edit the task
        console.log('Edit task', task);
    };

    return (
        <div className="tasks p-6">
            <h2 className="text-2xl font-bold mb-6">My Tasks</h2>
            <TaskList tasks={tasks} onEditTask={handleEditTask} />
        </div>
    );
};

export default Tasks;

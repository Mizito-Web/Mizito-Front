import { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../services/taskService'; // Assuming taskService is set up

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasksData = await getTasks(); // Fetch tasks from the backend
                setTasks(tasksData);
            } catch (err) {
                setError('Failed to load tasks.');
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const addTask = async (taskData) => {
        try {
            const newTask = await createTask(taskData); // Create a new task
            setTasks((prevTasks) => [...prevTasks, newTask]);
        } catch (err) {
            setError('Failed to add task.');
        }
    };

    const editTask = async (taskId, updatedTaskData) => {
        try {
            const updatedTask = await updateTask(taskId, updatedTaskData); // Update an existing task
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === taskId ? { ...task, ...updatedTask } : task
                )
            );
        } catch (err) {
            setError('Failed to update task.');
        }
    };

    const removeTask = async (taskId) => {
        try {
            await deleteTask(taskId); // Delete a task
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
        } catch (err) {
            setError('Failed to delete task.');
        }
    };

    return {
        tasks,
        loading,
        error,
        addTask,
        editTask,
        removeTask,
    };
};

export default useTasks;

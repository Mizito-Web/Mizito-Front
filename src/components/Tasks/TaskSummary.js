import React from 'react';
import TaskStatusCard from './TaskStatusCard'; // Import TaskStatusCard

const TaskSummary = () => {
    // Task data grouped by status
    const taskData = [
        {
            title: 'پیغام‌های شخصی من', // "My Personal Messages"
            count: 2,
            icon: <i className="fas fa-comment text-purple-500"></i>, // Font Awesome icon or any React icon
            iconBg: 'bg-purple-100',
            textColor: 'text-purple-500',
            highlight: true,
        },
        {
            title: 'کارهای قابل پیگیری', // "Trackable Tasks"
            count: 5,
            icon: <i className="fas fa-clock text-blue-500"></i>,
            iconBg: 'bg-blue-100',
            textColor: 'text-blue-500',
            highlight: false,
        },
        {
            title: 'کارهای دارای تأخیر', // "Delayed Tasks"
            count: 3,
            icon: <i className="fas fa-calendar-times text-red-500"></i>,
            iconBg: 'bg-red-100',
            textColor: 'text-red-500',
            highlight: false,
        },
        {
            title: 'کارهای امروز من', // "Today's Tasks"
            count: 7,
            icon: <i className="fas fa-check text-green-500"></i>,
            iconBg: 'bg-green-100',
            textColor: 'text-green-500',
            highlight: false,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {taskData.map((task, index) => (
                <TaskStatusCard
                    key={index}
                    title={task.title}
                    count={task.count}
                    icon={task.icon}
                    iconBg={task.iconBg}
                    textColor={task.textColor}
                    highlight={task.highlight}
                />
            ))}
        </div>
    );
};

export default TaskSummary;

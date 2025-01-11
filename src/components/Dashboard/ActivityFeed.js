import React from 'react';
import './ActivityFeed.module.css';

const ActivityFeed = ({ activities }) => {
    return (
        <div className="activity-feed p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Activity Feed</h2>
            <ul className="space-y-4">
                {activities.map((activity, index) => (
                    <li key={index} className="activity-item flex items-center space-x-3">
                        <span className="activity-time text-sm text-gray-500">{activity.time}</span>
                        <span className="activity-description">
                            <strong>{activity.user}</strong> {activity.description}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityFeed;

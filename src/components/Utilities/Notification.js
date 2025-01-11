import React from 'react';
import './Notification.module.css';

const Notification = ({ message, type = 'success', onClose }) => {
    const notificationStyles = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
    };

    return (
        <div className={`notification p-4 rounded-lg text-white ${notificationStyles[type]} flex justify-between items-center`}>
            <span>{message}</span>
            <button onClick={onClose} className="text-white ml-4">&times;</button>
        </div>
    );
};

export default Notification;

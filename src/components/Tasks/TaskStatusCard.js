import React from 'react';

const TaskStatusCard = ({ title, count, icon, iconBg, textColor, highlight }) => {
    return (
        <div
            className={`flex flex-col items-center justify-center rounded-lg p-4 shadow-md ${
                highlight ? 'bg-yellow-100 border border-yellow-400' : 'bg-white border border-gray-200'
            }`}
        >
            {/* Icon */}
            <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-3 ${iconBg}`}
            >
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-center">{title}</h3>

            {/* Task Count */}
            <span className={`text-2xl mt-2 ${textColor}`}>{count}</span>
        </div>
    );
};

export default TaskStatusCard;

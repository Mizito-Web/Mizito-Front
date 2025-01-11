// src/components/Dashboard/DashboardCard.js
import React from 'react';

const DashboardCard = ({ dashboard, onSelect }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100"
      onClick={() => onSelect(dashboard.id)}
    >
      {/* Left Side: Badge and Name */}
      <div>
        <div className="flex items-center">
          <span className="bg-blue-500 text-white text-sm font-bold rounded-full px-3 py-1 mr-3">
            {dashboard.itemCount}
          </span>
          <h3 className="text-gray-800 font-medium">{dashboard.name}</h3>
        </div>
      </div>

      {/* Right Side: Colleague's Avatar */}
      <div className="flex items-center">
        {dashboard.colleagues.map((colleague, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded-full bg-purple-500 text-white text-xs font-bold flex items-center justify-center ml-2 relative"
          >
            {colleague.initials}
            {colleague.online && (
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border border-white"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCard;

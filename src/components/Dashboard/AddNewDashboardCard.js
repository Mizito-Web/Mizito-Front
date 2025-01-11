// src/components/Dashboard/AddNewDashboardCard.js
import React from 'react';

const AddNewDashboardCard = ({ onAdd }) => {
  return (
    <div
      className="bg-gray-50 border-dashed border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100"
      onClick={onAdd}
    >
      <span className="text-4xl text-teal-500 font-bold">+</span>
      <p className="text-gray-600 text-sm mt-2">ایجاد میزکار جدید</p>
    </div>
  );
};

export default AddNewDashboardCard;

// src/components/Dashboard/AddDashboardModal.js
import React, { useState } from 'react';

const AddDashboardModal = ({ onClose, onAdd }) => {
  const [dashboardName, setDashboardName] = useState('');
  const [colleagues, setColleagues] = useState([]);
  const [colleagueInput, setColleagueInput] = useState('');
  const [error, setError] = useState('');

  const handleAddColleague = () => {
    if (colleagueInput.trim()) {
      setColleagues([...colleagues, colleagueInput.trim()]);
      setColleagueInput('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dashboardName.trim()) {
      setError('This field is required.');
      return;
    }
    onAdd({
      id: Date.now(), // Unique ID
      name: dashboardName,
      itemCount: 0, // Default to 0
      colleagues: colleagues.map((name) => ({
        initials: name
          .split(' ')
          .map((part) => part[0].toUpperCase())
          .join(''),
        online: false, // Default to offline
      })),
    });
    onClose(); // Close the modal after adding
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">ایجاد میزکار جدید</h2>
        <p className="text-sm text-gray-600 mb-4">
          شما در حال ایجاد یک میزکار جدید هستید.
        </p>
        <form onSubmit={handleSubmit}>
          {/* Dashboard Name */}
          <div className="mb-4">
            <label
              htmlFor="dashboardName"
              className="block text-sm font-medium text-gray-700"
            >
              نام شرکت و یا تیم
            </label>
            <input
              type="text"
              id="dashboardName"
              value={dashboardName}
              onChange={(e) => setDashboardName(e.target.value)}
              className={`w-full p-3 border ${
                error ? 'border-red-500' : 'border-gray-300'
              } rounded`}
              placeholder="Enter dashboard name"
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">این فیلد الزامی است.</p>
            )}
          </div>

          {/* Add Colleagues */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              همکاران خود را به میزکار جدید دعوت نمایید:
            </label>
            <div className="flex items-center mb-2">
              <input
                type="text"
                value={colleagueInput}
                onChange={(e) => setColleagueInput(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Enter colleague name"
              />
              <button
                type="button"
                onClick={handleAddColleague}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                +
              </button>
            </div>
            <div className="flex flex-wrap space-x-2">
              {colleagues.map((colleague, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {colleague}
                </span>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 px-4 py-2"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              ایجاد میزکار جدید
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDashboardModal;

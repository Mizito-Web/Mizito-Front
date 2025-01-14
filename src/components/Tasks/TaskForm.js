import React, { useState } from 'react';

const TaskForm = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert('عنوان فعالیت نمی‌تواند خالی باشد!');
    onSubmit({ title, details });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-bold mb-4">ایجاد وظیفه</h3>
      {/* Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">عنوان فعالیت</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-green-200"
          placeholder="عنوان فعالیت جدید..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Details */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">افزودن توضیحات</label>
        <textarea
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-green-200"
          placeholder="توضیحات وظیفه..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          انصراف
        </button>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          ایجاد
        </button>
      </div>
    </form>
  );
};

export default TaskForm;

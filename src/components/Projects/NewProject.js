import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../../services/projectService';

const NewProject = () => {
  const [projectName, setProjectName] = useState('');
  const [projectColor, setProjectColor] = useState('#FFFFFF'); // Default color
  const [projectIcon, setProjectIcon] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectName.trim()) {
      setError('Project name is required');
      return;
    }

    try {
      await createProject({ name: projectName, color: projectColor, icon: projectIcon });
      navigate('/projects'); // Redirect to the Projects page after creation
    } catch (err) {
      console.error('Failed to create project:', err);
      setError('Failed to create the project. Please try again.');
    }
  };

  // Handle file selection for the icon
  const handleFileChange = (e) => {
    setProjectIcon(e.target.files[0]);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">ایجاد پروژه</h2>

      {/* Instructions */}
      <div className="bg-blue-100 text-blue-800 p-4 rounded mb-6">
        <p>
          در صورت استفاده از پروژه، همکاران شما می‌توانند به صورت چابک و سریع با یکدیگر ارتباط داشته باشند. از امکانات تقویم و برد استفاده کرده و برای همکاران وظایف ایجاد کنید و در صورت نیاز صورتجلسات خود را ثبت نمایید.
        </p>
        <p className="mt-2">
          ضمناً به ازای ایجاد هر پروژه یک "دسته‌بندی" هم در قسمت وظایف به صورت خودکار ایجاد خواهد شد.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Project Name */}
        <div>
          <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
            عنوان پروژه
          </label>
          <input
            id="projectName"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="mt-1 block w-full p-3 border rounded-md"
            placeholder="عنوان پروژه"
          />
        </div>

        {/* Project Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">انتخاب رنگ نماد پروژه</label>
          <div className="flex space-x-2">
            {['#FFCDD2', '#F0F4C3', '#C8E6C9', '#BBDEFB', '#D1C4E9', '#E1BEE7', '#B0BEC5'].map((color) => (
              <div
                key={color}
                className={`w-10 h-10 rounded-full border cursor-pointer ${
                  projectColor === color ? 'ring-2 ring-blue-500' : ''
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setProjectColor(color)}
              ></div>
            ))}
          </div>
        </div>

        {/* Project Icon */}
        <div>
          <label htmlFor="projectIcon" className="block text-sm font-medium text-gray-700">
            انتخاب تصویر نماد پروژه
          </label>
          <input
            id="projectIcon"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => navigate('/projects')} // Redirect back to Projects page
            className="text-gray-500 hover:text-gray-700"
          >
            انصراف
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            ایجاد پروژه
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProject;

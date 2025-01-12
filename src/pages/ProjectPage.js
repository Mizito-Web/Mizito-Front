import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectTasks from '../components/Projects/ProjectTasks';
import ProjectCalendar from '../components/Projects/ProjectCalendar';
import ProjectBoard from '../components/Projects/ProjectBoard';
import GroupChat from '../components/Chat/GroupChat';
const ProjectPage = () => {
  const { id } = useParams(); // Project ID from URL
  const [activeTab, setActiveTab] = useState('group'); // Default to Group Chat tab
  const [isLoading, setIsLoading] = useState(false); // Simulate loading state

  // Simulate data loading
  const handleTabSwitch = (tab) => {
    setIsLoading(true);
    setActiveTab(tab);
    setTimeout(() => setIsLoading(false), 500); // Simulate a 500ms load time
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Header Tabs */}
      <div className="flex items-center justify-between mb-6 border-b">
        <div className="flex space-x-4 rtl:space-x-reverse">
          <button
            onClick={() => handleTabSwitch('group')}
            className={`flex items-center px-4 py-2 ${
              activeTab === 'group' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          >
            <i className="fas fa-comments mr-2"></i> گروه پروژه
          </button>
          <button
            onClick={() => handleTabSwitch('board')}
            className={`flex items-center px-4 py-2 ${
              activeTab === 'board' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          >
            <i className="fas fa-columns mr-2"></i> برد پروژه
          </button>
          <button
            onClick={() => handleTabSwitch('tasks')}
            className={`flex items-center px-4 py-2 ${
              activeTab === 'tasks' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          >
            <i className="fas fa-tasks mr-2"></i> وظایف پروژه
          </button>
          <button
            onClick={() => handleTabSwitch('calendar')}
            className={`flex items-center px-4 py-2 ${
              activeTab === 'calendar' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          >
            <i className="fas fa-calendar-alt mr-2"></i> تقویم پروژه
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-gray-50 rounded shadow-md p-6">
        {isLoading ? (
          // Loading spinner
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {activeTab === 'group' && <GroupChat projectId={id} />}
            {activeTab === 'board' && <ProjectBoard />}
            {activeTab === 'tasks' && <ProjectTasks />}
            {activeTab === 'calendar' && <ProjectCalendar />}
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;

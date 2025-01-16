import React from 'react';

const TaskSummary = ({
  messagesCount = 0,
  todayTasksCount = 0,
  followUpTasksCount = 0,
  delayedTasksCount = 0,
  onMessageClick,
  onTodayTasksClick,
  onFollowUpTasksClick,
  onDelayedTasksClick,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Personal Messages */}
      <div
        className="bg-yellow-100 border border-yellow-400 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer"
        onClick={onMessageClick}
      >
        <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center mb-3">
          <i className="fas fa-envelope text-purple-500 text-2xl"></i>
        </div>
        <h3 className="text-base font-semibold text-center">پیغام‌های شخصی من</h3>
        <span className="text-2xl mt-2 text-purple-500">{messagesCount}</span>
      </div>

      {/* Tasks for Today */}
      <div
        className="bg-green-100 border border-green-400 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer"
        onClick={onTodayTasksClick}
      >
        <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center mb-3">
          <i className="fas fa-tasks text-green-500 text-2xl"></i>
        </div>
        <h3 className="text-base font-semibold text-center">کارهای امروز من</h3>
        <span className="text-2xl mt-2 text-green-500">{todayTasksCount}</span>
      </div>

      {/* Follow-Up Tasks */}
      <div
        className="bg-blue-100 border border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer"
        onClick={onFollowUpTasksClick}
      >
        <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mb-3">
          <i className="fas fa-clock text-blue-500 text-2xl"></i>
        </div>
        <h3 className="text-base font-semibold text-center">کارهای قابل پیگیری</h3>
        <span className="text-2xl mt-2 text-blue-500">{followUpTasksCount}</span>
      </div>

      {/* Delayed Tasks */}
      <div
        className="bg-red-100 border border-red-400 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer"
        onClick={onDelayedTasksClick}
      >
        <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center mb-3">
          <i className="fas fa-calendar-times text-red-500 text-2xl"></i>
        </div>
        <h3 className="text-base font-semibold text-center">کارهای دارای تأخیر</h3>
        <span className="text-2xl mt-2 text-red-500">{delayedTasksCount}</span>
      </div>
    </div>
  );
};

export default TaskSummary;

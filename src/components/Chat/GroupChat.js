import React from 'react';

const GroupChat = ({ projectId }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">گروه پروژه</h2>
      <p>ارتباطات گروهی برای پروژه {projectId} در اینجا قرار خواهد گرفت.</p>
    </div>
  );
};

export default GroupChat;

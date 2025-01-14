import React, { useState } from 'react';
import ChatGroupList from '../components/Chat/ChatGroupList'; // Component for group list
import ChatWindow from '../components/Chat/ChatWindow'; // Component for chat window

const Chat = () => {
  const [groups, setGroups] = useState([
    { id: 1, name: 'دستیار میزیتو', isOnline: true, messages: [] },
    { id: 2, name: 'تیم پروژه A', isOnline: false, messages: [] },
  ]); // Mock groups data
  const [selectedGroupId, setSelectedGroupId] = useState(1); // Default selected group

  // Add a new group
  const handleAddGroup = () => {
    const newGroup = {
      id: groups.length + 1,
      name: `گروه جدید ${groups.length + 1}`,
      isOnline: false,
      messages: [],
    };
    setGroups([...groups, newGroup]);
  };

  // Handle sending a new message
  const handleSendMessage = (groupId, message) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId
          ? { ...group, messages: [...group.messages, message] }
          : group
      )
    );
  };

  // Get selected group
  const selectedGroup = groups.find((group) => group.id === selectedGroupId);

  return (
    <div className="flex h-full">
      {/* Sidebar: Groups List */}
      <div className="w-1/3 bg-gray-50 border-r border-gray-300 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">پیام‌ها</h2>
          <button
            onClick={handleAddGroup}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            گروه جدید
          </button>
        </div>
        <ChatGroupList
          groups={groups}
          selectedGroupId={selectedGroupId}
          onSelectGroup={setSelectedGroupId}
        />
      </div>

      {/* Main Content: Chat Window */}
      <div className="flex-1">
        {selectedGroup ? (
          <ChatWindow
            group={selectedGroup}
            onSendMessage={(message) =>
              handleSendMessage(selectedGroupId, message)
            }
          />
        ) : (
          <div className="flex justify-center items-center h-full text-gray-500">
            هیچ گروهی انتخاب نشده است
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;

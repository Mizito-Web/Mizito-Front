import React, { useState, useEffect } from 'react';
import ChatGroupList from '../components/Chat/ChatGroupList';
import ChatWindow from '../components/Chat/ChatWindow';
import { fetchGroups, sendMessageToBackend, addGroupToBackend } from '../services/apiClient'; // Backend service
import { connectWebSocket } from './utils/websocket'; // WebSocket utility

const Chat = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // WebSocket connection
  useEffect(() => {
    const ws = connectWebSocket((newMessage) => {
      setGroups((prevGroups) =>
        prevGroups.map((group) =>
          group.id === newMessage.groupId
            ? { ...group, messages: [...group.messages, newMessage] }
            : group
        )
      );
    });

    return () => ws.close(); // Clean up WebSocket on component unmount
  }, []);

  // Fetch groups from backend on mount
  useEffect(() => {
    const loadGroups = async () => {
      try {
        const data = await fetchGroups();
        setGroups(data);
      } catch (err) {
        setError('Failed to load groups. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadGroups();
  }, []);

  // Add a new group
  const handleAddGroup = async () => {
    try {
      const newGroup = await addGroupToBackend(`New Group ${groups.length + 1}`);
      setGroups([...groups, newGroup]);
    } catch (err) {
      setError('Failed to add group. Please try again.');
      console.error(err);
    }
  };

  // Send a new message
  const handleSendMessage = async (groupId, message) => {
    try {
      const newMessage = await sendMessageToBackend(groupId, message);
      setGroups((prevGroups) =>
        prevGroups.map((group) =>
          group.id === groupId
            ? { ...group, messages: [...group.messages, newMessage] }
            : group
        )
      );
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    }
  };

  // Get selected group
  const selectedGroup = groups.find((group) => group.id === selectedGroupId);

  if (loading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-full text-red-500">{error}</div>;
  }

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
            onSendMessage={(message) => handleSendMessage(selectedGroupId, message)}
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

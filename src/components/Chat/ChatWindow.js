import React, { useState } from 'react';

const ChatWindow = ({ group, onSendMessage }) => {
  const [message, setMessage] = useState(''); // Input field value

  // Handle sending a message
  const handleSendMessage = () => {
    if (message.trim() === '') return;

    const newMessage = {
      id: group.messages.length + 1,
      text: message,
      timestamp: new Date().toLocaleTimeString(),
      sender: 'You', // Example sender
    };

    onSendMessage(newMessage); // Pass the new message to parent
    setMessage(''); // Clear the input field
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-300 flex items-center justify-between">
        <h2 className="text-lg font-bold">{group.name}</h2>
        <span
          className={`text-sm ${
            group.isOnline ? 'text-green-500' : 'text-gray-500'
          }`}
        >
          {group.isOnline ? 'آنلاین' : 'آفلاین'}
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {group.messages.length > 0 ? (
          group.messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-4 ${
                msg.sender === 'You' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  msg.sender === 'You'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {msg.text}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {msg.timestamp}
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-center">هیچ پیامی ارسال نشده است</div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-300 flex items-center space-x-3 rtl:space-x-reverse">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="پیام خود را بنویسید..."
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          ارسال
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;

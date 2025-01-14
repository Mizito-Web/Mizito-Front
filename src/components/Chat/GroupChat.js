import React, { useState } from 'react';

const GroupChat = ({ projectId }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'user',
      type: 'task',
      title: 'آشنایی با میزینتو',
      details: 'در این بخش یاد می‌گیری چطوری در قسمت پروژه، از صورتجلسات استفاده کنی.',
      checklist: ['مشاهده بخش نامه‌ها', 'مشاهده بخش یادداشت‌ها'],
      time: '17:06',
    },
    {
      id: 2,
      sender: 'other',
      type: 'text',
      content: 'امیدوارم همیشه کارهات در یک محیط شاد به بهترین نحو انجام بشه.',
      time: '17:06',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: 'user',
        type: 'text',
        content: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 rounded shadow-md p-4">
      {/* Message List */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-sm p-4 rounded-lg shadow-md ${
                msg.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-green-100 text-right'
              }`}
            >
              {msg.type === 'task' ? (
                <div>
                  <h3 className="font-bold mb-2">{msg.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{msg.details}</p>
                  <ul className="space-y-1 text-sm text-gray-800">
                    {msg.checklist.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-sm">{msg.content}</p>
              )}
              <span className="block text-xs text-gray-500 mt-2">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center mt-4 border-t pt-4">
        <input
          type="text"
          placeholder="پیام خود را بگذارید..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={sendMessage}
          className="px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          ارسال
        </button>
      </div>
    </div>
  );
};

export default GroupChat;

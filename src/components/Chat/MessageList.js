import React, { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import './MessageList.module.css';

const MessageList = ({ projectId }) => {
    const [messages, setMessages] = useState([]);
    const { lastMessage } = useWebSocket(`wss://example.com/chat/${projectId}`, {
        shouldReconnect: () => true,
    });

    useEffect(() => {
        if (lastMessage) {
            setMessages((prev) => [...prev, JSON.parse(lastMessage.data)]);
        }
    }, [lastMessage]);

    return (
        <div className="message-list overflow-y-auto h-64 p-4">
            {messages.map((msg, idx) => (
                <div key={idx} className="message mb-2">
                    <p className="text-sm text-gray-600">
                        <strong>{msg.sender}:</strong> {msg.content}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default MessageList;

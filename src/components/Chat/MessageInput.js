import React, { useState } from 'react';
import useWebSocket from 'react-use-websocket';
import './MessageInput.module.css';

const MessageInput = ({ projectId }) => {
    const [input, setInput] = useState('');
    const { sendMessage } = useWebSocket(`wss://example.com/chat/${projectId}`);

    const handleSend = () => {
        if (input.trim() !== '') {
            const message = {
                sender: 'CurrentUser', // Replace with actual username
                content: input,
                timestamp: new Date().toISOString(),
            };
            sendMessage(JSON.stringify(message));
            setInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="message-input flex items-center p-2 border-t">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-grow p-2 border rounded-l"
            />
            <button
                onClick={handleSend}
                className="p-2 bg-orange-500 text-white rounded-r hover:bg-orange-600"
            >
                Send
            </button>
        </div>
    );
};

export default MessageInput;

import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './ChatWindow.module.css';

const ChatWindow = ({ projectId }) => {
    return (
        <div className="chat-window">
            <MessageList projectId={projectId} />
            <MessageInput projectId={projectId} />
        </div>
    );
};

export default ChatWindow;

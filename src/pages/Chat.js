import React, { useState, useEffect } from 'react';
import ChatWindow from '../components/Chat/ChatWindow';

const Chat = ({ projectId }) => {
    return (
        <div className="chat p-6">
            <h2 className="text-2xl font-bold mb-6">Project Chat</h2>
            <ChatWindow projectId={projectId} />
        </div>
    );
};

export default Chat;

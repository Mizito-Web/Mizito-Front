import React from 'react';

const ChatGroupList = ({ groups, selectedGroupId, onSelectGroup }) => {
  return (
    <ul className="space-y-2">
      {groups.map((group) => (
        <li
          key={group.id}
          onClick={() => onSelectGroup(group.id)}
          className={`p-3 rounded cursor-pointer flex items-center justify-between ${
            selectedGroupId === group.id
              ? 'bg-blue-100 text-blue-800'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          <span>{group.name}</span>
          {group.isOnline && (
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ChatGroupList;

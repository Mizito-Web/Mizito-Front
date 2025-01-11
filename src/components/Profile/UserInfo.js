import React from 'react';
import './UserInfo.module.css';

const UserInfo = ({ user }) => (
    <div className="user-info">
        <img src={user.avatar || '/default-avatar.png'} alt="User Avatar" />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <button>Edit Profile</button>
    </div>
);

export default UserInfo;

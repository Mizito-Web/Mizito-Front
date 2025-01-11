import React from 'react';
import './ProfileInfo.module.css';

const ProfileInfo = ({ user, onEdit }) => {
    return (
        <div className="profile-info p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <div className="flex items-center space-x-4">
                {/* User Avatar */}
                <img
                    src={user.avatar || '/default-avatar.png'}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full border"
                />
                {/* User Info */}
                <div>
                    <p className="text-lg font-semibold">{user.name}</p>
                    <p className="text-gray-600">{user.email}</p>
                </div>
            </div>
            {/* Edit Profile Button */}
            <button
                onClick={onEdit}
                className="mt-4 py-2 px-6 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
                Edit Profile
            </button>
        </div>
    );
};

export default ProfileInfo;

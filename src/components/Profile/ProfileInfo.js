import React, { useState } from 'react';
import './ProfileInfo.module.css';

const ProfileInfo = ({ user, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        avatar: user.avatar || '/default-avatar.png',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        onSave(formData);
        setIsEditing(false);
    };

    return (
        <div className="profile-info p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold text-center mb-6">User Profile</h2>
            <div className="flex flex-col items-center space-y-4">
                <img
                    src={formData.avatar}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full border border-gray-300"
                />
                <div className="text-center">
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="block text-lg font-semibold border rounded p-2 w-full text-center"
                                placeholder="Enter name"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block text-gray-600 border rounded p-2 w-full mt-2 text-center"
                                placeholder="Enter email"
                            />
                        </>
                    ) : (
                        <>
                            <p className="text-lg font-semibold">{formData.name}</p>
                            <p className="text-gray-600">{formData.email}</p>
                        </>
                    )}
                </div>
                {isEditing ? (
                    <button
                        onClick={handleSave}
                        className="py-2 px-6 bg-green-500 text-white rounded hover:bg-green-600 transition-all"
                    >
                        Save Changes
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="py-2 px-6 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all"
                    >
                        Edit Profile
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProfileInfo;

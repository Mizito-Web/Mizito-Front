import React, { useState } from 'react';
import './EditProfileForm.module.css';

const EditProfileForm = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        avatar: user.avatar || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);  // Call onSave to update profile data
    };

    return (
        <div className="edit-profile-form p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="avatar" className="block text-sm font-semibold">Avatar URL</label>
                    <input
                        type="text"
                        id="avatar"
                        name="avatar"
                        value={formData.avatar}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border rounded"
                    />
                </div>
                <div className="flex space-x-4">
                    <button type="submit" className="py-2 px-6 bg-orange-500 text-white rounded hover:bg-orange-600">
                        Save Changes
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="py-2 px-6 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProfileForm;

import React, { useState } from 'react';

const ChangePasswordForm = ({ onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        onSave(formData); // Save new password
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Change Password</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Current Password</label>
                <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">New Password</label>
                <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="flex space-x-4 rtl:space-x-reverse">
                <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default ChangePasswordForm;

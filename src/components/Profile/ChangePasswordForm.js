import React, { useState } from 'react';
import './ChangePasswordForm.module.css';

const ChangePasswordForm = ({ onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        onSave(formData);  // Call onSave to update the password
    };

    return (
        <div className="change-password-form p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Change Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="currentPassword" className="block text-sm font-semibold">Current Password</label>
                    <input
                        type="password"
                        id="currentPassword"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="newPassword" className="block text-sm font-semibold">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold">Confirm New Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border rounded"
                        required
                    />
                </div>
                <div className="flex space-x-4">
                    <button type="submit" className="py-2 px-6 bg-orange-500 text-white rounded hover:bg-orange-600">
                        Change Password
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

export default ChangePasswordForm;

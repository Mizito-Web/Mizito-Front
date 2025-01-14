import React, { useState } from 'react';

const EditProfileForm = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({ ...user });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData); // Save changes
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
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

export default EditProfileForm;

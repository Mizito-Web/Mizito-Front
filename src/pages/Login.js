// pages/Login.js
import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';  // Using AuthLayout for Login
import { login } from '../services/authService'; // Assuming authService is set up

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData);
            // Navigate to Dashboard or another page after login
        } catch (err) {
            setError('Login failed');
        }
    };

    return (
        <AuthLayout>
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="w-full p-3 mb-4 border rounded"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full p-3 mb-4 border rounded"
                />
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="py-2 px-6 bg-orange-500 text-white rounded hover:bg-orange-600">
                    Login
                </button>
            </form>
        </AuthLayout>
    );
};

export default Login;

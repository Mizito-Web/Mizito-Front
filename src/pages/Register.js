import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/AuthService'; // Assuming you have an auth service

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            await register(formData);  // Assuming register API call here
            navigate('/login');  // Redirect to login page on success
        } catch (err) {
            setError('Registration failed');
        }
    };

    return (
        <div className="register p-6">
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                    className="w-full p-3 mb-4 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full p-3 mb-4 border rounded"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    className="w-full p-3 mb-4 border rounded"
                />
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                    className="w-full p-3 mb-4 border rounded"
                />
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="py-2 px-6 bg-orange-500 text-white rounded hover:bg-orange-600">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;

// services/authService.js
import axios from 'axios';

const API_URL = 'https://your-api.com/api/auth/'; // Replace with your actual API URL

export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}login`, credentials);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
};

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}register`, userData);
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export const isAuthenticated = () => {
    return !!localStorage.getItem('user');
};

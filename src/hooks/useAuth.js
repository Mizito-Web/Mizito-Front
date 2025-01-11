import { useState, useEffect } from 'react';
import { login, register, logout, getCurrentUser } from '../services/authService'; // Assuming your auth services are set up

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const currentUser = await getCurrentUser(); // Get the current logged-in user
                setUser(currentUser);
            } catch (err) {
                setError('Unable to fetch user data.');
            } finally {
                setLoading(false);
            }
        };
        
        fetchCurrentUser();
    }, []);

    const handleLogin = async (credentials) => {
        try {
            const loggedInUser = await login(credentials);  // Assuming login API returns user data
            setUser(loggedInUser);
        } catch (err) {
            setError('Login failed.');
        }
    };

    const handleRegister = async (userData) => {
        try {
            const newUser = await register(userData); // Assuming register API returns user data
            setUser(newUser);
        } catch (err) {
            setError('Registration failed.');
        }
    };

    const handleLogout = () => {
        logout(); // Assuming logout clears the token
        setUser(null);
    };

    return {
        user,
        loading,
        error,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
    };
};

export default useAuth;

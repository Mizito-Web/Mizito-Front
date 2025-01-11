import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.module.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/dashboard">Project Manager</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;

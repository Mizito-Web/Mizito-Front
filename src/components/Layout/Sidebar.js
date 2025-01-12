import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.module.css';

const Sidebar = () => {
    const menuItems = [
        { name: 'Dashboard', path: '/dashboard', icon: '🏠' },
        { name: 'Projects', path: '/projects', icon: '📂' },
        { name: 'Tasks', path: '/tasks', icon: '✅' },
        { name: 'Chat', path: '/chat', icon: '💬' },
        { name: 'Profile', path: '/profile', icon: '👤' },
    ];

    return (
        <div className="sidebar bg-orange-500 text-white h-100% sticky p-4">
            <h1 className="text-2xl font-bold mb-6">Project Manager</h1>
            <ul className="space-y-4">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center p-2 rounded-lg hover:bg-orange-600 ${
                                    isActive ? 'bg-orange-600' : ''
                                }`
                            }
                        >
                            <span className="mr-3">{item.icon}</span>
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;

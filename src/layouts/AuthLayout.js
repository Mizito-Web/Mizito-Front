// layouts/AuthLayout.js
import React from 'react';
import Navbar from '../components/Layout/Navbar';  // Optional, if you want to show Navbar in Auth pages

const AuthLayout = ({ children }) => {
    return (
        <div className="auth-layout flex flex-col min-h-screen">
            <Navbar /> {/* Optionally include navbar in auth pages */}
            <main className="flex-1 flex justify-center items-center p-6">
                <div className="max-w-md w-full bg-white shadow-md p-8 rounded-lg">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AuthLayout;

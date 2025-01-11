import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet

const AuthLayout = () => {
    return (
        <div className="auth-layout flex flex-col min-h-screen bg-white-100">
            <main className="flex-1 flex justify-center items-center p-6 overflow-auto">
                <div className="max-w-lg w-full bg-white shadow-md p-8 rounded-lg">
                    <Outlet /> {/* This renders the child route */}
                </div>
            </main>
        </div>
    );
};

export default AuthLayout;

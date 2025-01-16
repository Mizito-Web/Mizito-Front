import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes
import Navbar from '../components/Layout/Navbar'; // Assuming Navbar component exists
import Sidebar from '../components/Layout/Sidebar'; // Assuming Sidebar component exists
import Footer from '../components/Layout/Footer'; // Assuming Footer component exists

const MainLayout = () => {
    return (
        <div className="main-layout flex flex-col min-h-screen bg-gradient-to-tr from-gray-100 to-gray-200">
    
            {/* Content Section */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <Sidebar className="hidden lg:block w-64 bg-white shadow-lg border-r border-gray-200" />

                {/* Main Content */}
                <main className="flex-1 p-6 bg-white shadow-md rounded-tl-lg">
                    <div className="p-4 rounded-lg shadow-lg bg-gray-50">
                        <Outlet /> {/* Outlet will render the child route components */}
                    </div>
                </main>
            </div>

            {/* Footer */}
            <Footer className="bg-white shadow-md border-t border-gray-200 p-4" />
        </div>
    );
};

export default MainLayout;

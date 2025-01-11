import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes
import Navbar from '../components/Layout/Navbar'; // Assuming Navbar component exists
import Sidebar from '../components/Layout/Sidebar'; // Assuming Sidebar component exists
import Footer from '../components/Layout/Footer'; // Assuming Footer component exists

const MainLayout = () => {
    return (
        <div className="main-layout flex flex-col min-h-screen">


            {/* Content Section */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <Sidebar className="hidden lg:block w-64 bg-gray-100 shadow-md" />
                
                {/* Main Content */}
                <main className="flex-1 p-4 sm:p-6 bg-gray-50">
                    <Outlet /> {/* Outlet will render the child route components */}
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;

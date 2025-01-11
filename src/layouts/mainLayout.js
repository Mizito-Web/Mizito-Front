// layouts/MainLayout.js
import React from 'react';
import Navbar from '../components/Layout/Navbar';  // Assuming Navbar component exists
import Sidebar from '../components/Layout/Sidebar';  // Assuming Sidebar component exists
import Footer from '../components/Layout/Footer';  // Assuming Footer component exists

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-6">{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;

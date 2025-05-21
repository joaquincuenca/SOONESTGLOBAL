import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout() {
    return (
        <div>
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
            <Navbar />
        </div>

        <Outlet />

        <Footer />
        </div>
    );
}

export default MainLayout;

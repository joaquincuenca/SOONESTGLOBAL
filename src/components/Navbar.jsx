import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="w-full fixed top-0 bg-white shadow z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    <span style={{ color: '#01B029' }}>SOONEST</span>
                    <span style={{ color: '#FF0004' }}>GLOBAL</span>
                </h1>

                {/* Hamburger Button */}
                <button
                    className="md:hidden text-2xl text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navigation Links */}
                <ul
                    className={`md:flex flex-col md:flex-row md:static absolute top-16 left-0 w-full bg-white md:bg-transparent md:w-auto gap-6 text-gray-700 font-medium transition-all duration-300 ease-in-out ${
                        isOpen ? 'flex' : 'hidden'
                    }`}
                >
                    <li><a href="#home" className="block px-6 py-2 hover:text-blue-500">Home</a></li>
                    <li><a href="#services" className="block px-6 py-2 hover:text-blue-500">Services</a></li>
                    <li><a href="#about" className="block px-6 py-2 hover:text-blue-500">About</a></li>
                    <li><a href="#contact" className="block px-6 py-2 hover:text-blue-500">Contact us</a></li>
                </ul>
            </div>
        </nav>
    );
}

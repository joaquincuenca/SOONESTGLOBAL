import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Toggle submenu only on small screens
    const toggleServices = () => setIsServicesOpen(!isServicesOpen);

    // Close menu and submenu on link click (for better UX)
    const closeAllMenus = () => {
        setIsOpen(false);
        setIsServicesOpen(false);
    };

    return (
        <nav className="w-full fixed top-0 bg-white shadow z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">
            <span style={{ color: '#01B029' }}>SOONEST</span>
            <span style={{ color: '#FF0004' }}>GLOBAL</span>
            </h1>

            <button
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            >
            {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <ul
            className={`md:flex flex-col md:flex-row md:static absolute top-16 left-0 w-full bg-white md:bg-transparent md:w-auto gap-6 text-gray-700 font-medium transition-all duration-300 ease-in-out ${
                isOpen ? 'flex' : 'hidden'
            }`}
            >
            <li>
                <Link to="/" className="block px-6 py-2 hover:text-blue-500" onClick={closeAllMenus}>
                Home
                </Link>
            </li>

            <li className="relative group">
                <div className="flex items-center justify-between px-6 py-2 cursor-pointer hover:text-blue-500 md:hover:text-blue-500">
                <Link to="/services" onClick={closeAllMenus} className="flex items-center gap-1">
                    Services
                </Link>
                {/* Arrow button visible only on small screens */}
                <button
                    onClick={(e) => {
                    e.preventDefault();
                    toggleServices();
                    }}
                    className="md:hidden text-gray-700 focus:outline-none"
                    aria-label="Toggle Services submenu"
                >
                    <FaChevronDown
                    className={`text-xs mt-0.5 transform transition-transform duration-300 ${
                        isServicesOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    />
                </button>
                </div>

                {/* Submenu */}
                <ul
                className={`
                    md:absolute md:left-0 md:top-full md:bg-white md:shadow-md md:rounded-md md:w-48 md:invisible md:opacity-0 md:group-hover:visible md:group-hover:opacity-100 md:pointer-events-none md:group-hover:pointer-events-auto
                    ${isServicesOpen ? 'block' : 'hidden'}
                    md:block
                `}
                >
                <li>
                    <Link
                    to="/international"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllMenus}
                    >
                    International
                    </Link>
                </li>
                <li>
                    <Link
                    to="/domestic"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllMenus}
                    >
                    Domestic
                    </Link>
                </li>
                <li>
                    <Link
                    to="/allied"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllMenus}
                    >
                    Allied
                    </Link>
                </li>
                </ul>
            </li>

            <li>
                <Link to="/about" className="block px-6 py-2 hover:text-blue-500" onClick={closeAllMenus}>
                About
                </Link>
            </li>
            <li>
                <Link
                to="/testimonials"
                className="block px-6 py-2 hover:text-blue-500"
                onClick={closeAllMenus}
                >
                Testimonials
                </Link>
            </li>
            <li>
                <Link to="/contact" className="block px-6 py-2 hover:text-blue-500" onClick={closeAllMenus}>
                Contact us
                </Link>
            </li>
            </ul>
        </div>
        </nav>
    );
}

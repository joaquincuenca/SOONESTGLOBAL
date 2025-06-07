import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleServices = () => setIsServicesOpen(!isServicesOpen);

    const closeAllMenus = () => {
        setIsOpen(false);
        setIsServicesOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Top Bar */}
            <div className="w-full bg-[#005c35] text-white text-sm text-left px-6 pt-1 pb-3 font-bold">
                We Find Solutions..... TODAY!
            </div>

            {/* Main Navbar */}
            <nav className="w-full fixed top-8 md:top-6 bg-white shadow z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" onClick={closeAllMenus} className="text-xl font-bold">
                        <span style={{ color: '#005c35' }}>SOONEST</span>
                        <span style={{ color: '#ed1b24' }}>GLOBAL</span>
                    </Link>

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
                            <Link to="/" className="block px-6 py-2 hover:text-[#005c35]" onClick={closeAllMenus}>
                                Home
                            </Link>
                        </li>

                        <li
                            className="relative group"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <div className="flex items-center justify-between px-6 py-2 cursor-pointer hover:text-[#005c35] md:hover:text-[#005c35]">
                                <Link to="/services" onClick={closeAllMenus} className="flex items-center gap-1">
                                    Services
                                    <FaChevronDown className="hidden md:inline-block ml-1 text-xs" />
                                </Link>
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

                            <ul
                                className={`
                                    absolute left-0 top-full bg-white shadow-md rounded-md w-48 z-10
                                    transition-opacity duration-300
                                    ${isServicesOpen ? 'block' : 'hidden'}
                                    md:group-hover:block
                                    md:block md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible
                                `}
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
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
                            <Link to="/about" className="block px-6 py-2 hover:text-[#005c35]" onClick={closeAllMenus}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/testimonials"
                                className="block px-6 py-2 hover:text-[#005c35]"
                                onClick={closeAllMenus}
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block px-6 py-2 hover:text-[#005c35]" onClick={closeAllMenus}>
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

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
        <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md transition duration-300 px-4 sm:px-6 lg:px-12">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                
            <Link to="/" onClick={closeAllMenus} className="inline-block leading-tight">
            <div className="text-4xl font-extrabold tracking-wider">
                <span className="text-[#005c35]">SOON</span>
                <span className="text-[#ed1b24]">EST</span>
            </div>
            <div className="text-sm text-[#005c35] font-semibold tracking-wide">
                GLOBAL EXPRESS CORP.
            </div>
            </Link>

                {/* Right: Desktop Navigation */}
                <ul className="hidden md:flex space-x-8 ml-auto text-gray-700 font-medium">
                    <li>
                        <Link to="/" onClick={closeAllMenus} className="hover:text-[#005c35] transition">Home</Link>
                    </li>
                    <li className="relative group">
                    <Link to="/services" onClick={closeAllMenus} className="flex items-center gap-1 hover:text-[#005c35] transition">
                        Services <FaChevronDown className="text-xs mt-0.5" />
                    </Link>

                        <ul className="absolute top-8 right-0 w-44 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-20">
                            <li><Link to="/international" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">International</Link></li>
                            <li><Link to="/domestic" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">Domestic</Link></li>
                            <li><Link to="/allied" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">Allied</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/about" onClick={closeAllMenus} className="hover:text-[#005c35] transition">About</Link></li>
                    <li><Link to="/fare-rate" onClick={closeAllMenus} className="hover:text-[#005c35] transition">Get a Fare Rate</Link></li>
                    <li><Link to="/contact" onClick={closeAllMenus} className="hover:text-[#005c35] transition">Contact</Link></li>
                </ul>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-2xl text-gray-700 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-6 pb-4 shadow-md">
                    <ul className="flex flex-col space-y-3 text-gray-700">
                        <li><Link to="/" onClick={closeAllMenus} className="hover:text-[#005c35]">Home</Link></li>

                        <li>
                            <div className="flex justify-between items-center cursor-pointer" onClick={toggleServices}>
                                <span className="hover:text-[#005c35]">Services</span>
                                <FaChevronDown className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                            </div>
                            {isServicesOpen && (
                                <ul className="pl-4 mt-2 space-y-2 text-sm">
                                    <li><Link to="/international" onClick={closeAllMenus} className="block hover:text-[#005c35]">International</Link></li>
                                    <li><Link to="/domestic" onClick={closeAllMenus} className="block hover:text-[#005c35]">Domestic</Link></li>
                                    <li><Link to="/allied" onClick={closeAllMenus} className="block hover:text-[#005c35]">Allied</Link></li>
                                </ul>
                            )}
                        </li>

                        <li><Link to="/about" onClick={closeAllMenus} className="hover:text-[#005c35]">About</Link></li>
                        <li><Link to="/fare-rate" onClick={closeAllMenus} className="hover:text-[#005c35]">Get a Fare Rate</Link></li>
                        <li><Link to="/contact" onClick={closeAllMenus} className="hover:text-[#005c35]">Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

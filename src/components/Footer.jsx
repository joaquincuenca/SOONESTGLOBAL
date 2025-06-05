import React from 'react';
import { FaFacebookF, FaViber, FaEnvelope, FaTelegramPlane, FaPaperPlane } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="text-white" style={{ backgroundColor: '#343A40' }}>
            <div className="container mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-left">
                
                {/* Soonest Global */}
                <div>
                    <h2 className="text-lg font-bold mb-3">Soonest Global</h2>
                    <p className="mb-4">
                        Your trusted partner for global logistics and shipping solutions. Delivering excellence across the world.
                    </p>
                    <div className="flex gap-3 text-lg">
                        <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
                        <FaViber className="hover:text-purple-500 cursor-pointer" />
                        <FaEnvelope className="hover:text-yellow-400 cursor-pointer" />
                        <FaTelegramPlane className="hover:text-blue-400 cursor-pointer" />
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h2 className="text-lg font-bold mb-3">Services</h2>
                    <ul className="space-y-2">
                        {['International', 'Domestic', 'Allied'].map((service, idx) => (
                        <li key={idx} className="hover:text-blue-400 cursor-pointer">{service}</li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-bold mb-3">Quick Links</h2>
                    <ul className="space-y-2">
                        <li className="hover:text-blue-400 cursor-pointer">Home</li>
                        <li className="hover:text-blue-400 cursor-pointer">About Us</li>
                        <li className="hover:text-blue-400 cursor-pointer">Services</li>
                        <li className="hover:text-blue-400 cursor-pointer">Testimonials</li>
                        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="text-lg font-bold mb-3">Newsletter</h2>
                    <p className="mb-3">Subscribe to our newsletter for the latest updates and logistics insights.</p>
                    <div className="flex items-center bg-white">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-2 rounded-l-full w-full text-black focus:outline-none"
                        />
                        <button className="bg-orange-500 px-4 py-2 rounded-r-full text-white hover:bg-orange-600">
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-600 mt-8 text-center py-4 text-xs text-gray-300">
                &copy; {new Date().getFullYear()} Soonest Global. All rights reserved.
            </div>
        </footer>
    );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import MainLayout from '../layout/MainLayout';

import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Testimonials from '../pages/Testimonials';
import Contact from '../pages/Contact';

import International from '../services/International';
import Domestic from '../services/Domestic';
import Allied from '../services/Allied';

export default function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            {/* Landing Page */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />

                {/* services */}
                <Route path="/international" element={<International />} />
                <Route path="/domestic" element={<Domestic />} />
                <Route path="/allied" element={<Allied />} />
            </Route>
        </Routes>

        </BrowserRouter>
    );
}

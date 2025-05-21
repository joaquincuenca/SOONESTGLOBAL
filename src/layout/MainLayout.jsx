import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Home from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Testimonials from '../pages/Testimonials';

function MainLayout() {
    return (
        <div>
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
            <Navbar />
        </div>

        <div className="pt-20">
            <section id="home">
            <Home />
            </section>
            <section id="services">
            <Services />
            </section>
            <section id="about">
            <About />
            </section>
            <section id="testimonials">
            <Testimonials />
            </section>
            <section id="contact">
            <Contact />
            </section>
        </div>

        <Footer />
        </div>
    );
}

export default MainLayout;

import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Testimonial from './sections/Testimonials'
import Footer from './components/Footer'


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

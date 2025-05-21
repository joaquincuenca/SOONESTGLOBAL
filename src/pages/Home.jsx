import React from 'react'

export default function Home() {
    return (
        <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
        <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-6">
            Global Logistics Solutions
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
            Innovative, reliable, and efficient shipping and logistics services for businesses worldwide. Your cargo, our responsibility.
            </p>
            <a
            href="#about"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
            >
            Learn More
            </a>
        </div>
        </section>
    )
}

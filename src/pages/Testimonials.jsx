import React from 'react';
import { FaStar } from 'react-icons/fa'; // Make sure to install react-icons: npm install react-icons

const testimonials = [
    {
        name: 'John Doe',
        title: 'CEO, Oceanic Logistics',
        quote:
        'Soonest Global exceeded our expectations. Their dedication and professionalism made our shipping smooth and worry-free.',
        image: 'https://i.pravatar.cc/100?img=1',
    },
    {
        name: 'Jane Smith',
        title: 'Freight Manager, GlobalTrade Co.',
        quote:
        'The best logistics partner we’ve worked with. Timely updates, reliable service, and a truly global reach.',
        image: 'https://i.pravatar.cc/100?img=2',
    },
    {
        name: 'Michael Cruz',
        title: 'Operations Head, Pacific Movers',
        quote:
        'Professional, efficient, and always available. Soonest Global delivers both cargo and confidence.',
        image: 'https://i.pravatar.cc/100?img=3',
    },
    {
        name: 'Sarah Lin',
        title: 'Logistics Coordinator, TransOcean',
        quote:
        'Reliable, transparent, and fast. We love working with Soonest Global!',
        image: 'https://i.pravatar.cc/100?img=4',
    },
    ];

    export default function Testimonial() {
    return (
        <section className="bg-gray-100 py-12" id="testimonials">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            What Our Clients Say
            </h2>

            {/* Center the scroll area */}
            <div className="flex justify-center">
            <div className="overflow-x-auto">
                <div className="flex space-x-6 px-1 w-max">
                {testimonials.map((t, index) => (
                    <div
                    key={index}
                    className="w-80 bg-white p-6 rounded-lg shadow-md text-center flex-shrink-0"
                    >
                    <img
                        src={t.image}
                        alt={t.name}
                        className="w-20 h-20 mx-auto rounded-full mb-4"
                    />

                    {/* Star Rating */}
                    <div className="flex justify-center mb-2 text-yellow-500">
                        {Array(5)
                        .fill()
                        .map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>

                    <p className="text-gray-600 italic mb-4">"{t.quote}"</p>
                    <h4 className="text-lg font-semibold text-gray-800">
                        {t.name}
                    </h4>
                    <span className="text-sm text-gray-500">{t.title}</span>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

import React from 'react';
import { FaHandshake, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const alliedServices = [
    {
        icon: <FaHandshake className="text-3xl text-green-600" />,
        title: "Buying Agents / Buyer’s Consolidator",
        description:
        "SOONEST Global Express Corporation partners with selected exporters nationwide, consolidating buyer’s cargos and performing inspection and quality control before shipment abroad.",
    },
    {
        icon: <FaShieldAlt className="text-3xl text-green-600" />,
        title: "Merchandise Floater & Marine Cargo Insurance",
        description:
        "Backed by Pioneer Insurance, we protect the value of your cargo domestically and internationally until it reaches its final destination with personalized service commitment.",
    },
    {
        icon: <FaHeadset className="text-3xl text-green-600" />,
        title: "24/7 Customer Service Online",
        description:
        "Our customer service hotline is available around the clock to provide you support and ensure we meet your logistics needs effectively.",
    },
    ];

    export default function Allied() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16 mt-12">
        <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700">
                Allied Services
            </h2>
            <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-3xl mx-auto">
                While every other logistics company promises to be on par with the best, we endeavor to give more, remaining steadfast in our pledge to serve our clients and their business the soonest time possible by going the extra mile.
            </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {alliedServices.map((service, index) => (
                <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-start"
                >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">
                    {service.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">{service.description}</p>
                </div>
            ))}
            </div>

            <div className="mt-16 text-center">
            <p className="text-green-700 font-bold italic text-base sm:text-lg">
                Soonest Global — We Find Solutions... TODAY!
            </p>
            </div>
        </div>
        </div>
    );
}

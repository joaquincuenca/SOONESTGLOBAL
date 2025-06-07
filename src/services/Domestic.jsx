import React from 'react';
import {
    FaTruckMoving,
    FaRoad,
    FaMapMarkedAlt,
    FaBoxes,
    FaTools,
    FaDollyFlatbed,
    } from 'react-icons/fa';

    const domesticServices = [
    {
        icon: <FaRoad className="text-3xl text-green-600" />,
        title: 'REDS (Road Express Delivery Service)',
        description:
        'We envision SOONEST Global Express Corporation as a leader in RORO (Roll-on/Roll-off) Service from Manila to any point in the Philippines.',
    },
    {
        icon: <FaMapMarkedAlt className="text-3xl text-green-600" />,
        title: 'Local Forwarding Nationwide',
        description:
        'We have Domestic/Local Services from and to anywhere in the Philippines, delivering various commodities with help from our local partners.',
    },
    {
        icon: <FaTruckMoving className="text-3xl text-green-600" />,
        title: 'Domestic Cargo Consolidation for Visayas and Mindanao',
        description:
        'We provide truckload service from Manila nationwide, reducing cargo handling and ideal for special projects needing on-site delivery.',
    },
    {
        icon: <FaBoxes className="text-3xl text-green-600" />,
        title: 'Packing & Cargo Crating',
        description:
        'As a value-added service, we provide packing and crating tailored to clients’ needs and standard packaging procedures.',
    },
    {
        icon: <FaDollyFlatbed className="text-3xl text-green-600" />,
        title: 'Trucking, Hauling & Rigging',
        description:
        'With company-owned trucks, a boom truck, and pallet jacks, we meet all delivery and heavy cargo lifting requirements nationwide.',
    },
    ];

    export default function Domestic() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700">
                Domestic Services
            </h2>
            <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-3xl mx-auto">
                SOONEST Global Express Corporation delivers cargo with speed and reliability by LAND, AIR, and SEA. We are given guaranteed space availability by Cebu Pacific Air and local ocean carriers for FCL shipments.
            </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticServices.map((service, index) => (
                <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
                >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-800">
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

import React from 'react';
import {
    FaShip,
    FaPlane,
    FaBoxOpen,
    FaPaperPlane,
    FaCogs,
    FaBalanceScale,
    } from 'react-icons/fa';

    const services = [
    {
        icon: <FaShip className="text-3xl text-green-600" />,
        title: 'International Freight Forwarding – Export by Sea',
        description:
        'SOONEST Global Express Corporation can support the weekly movement of cargo from Manila and Cebu for global destinations, whether LCL (Less Container Load) or FCL (Full Container Load). We have dedicated space for sure loading for our FCL shipments from various major international shipping lines like UASC, Evergreen, YML, Hanjin, China Shipping, Hyundai, NYK, and OOCL, to name a few.',
    },
    {
        icon: <FaPlane className="text-3xl text-green-600" />,
        title: 'International Freight Forwarding – Import, Air and Sea',
        description:
        'SOONEST Global Express Corporation has strong global linkage of freight forwarding agents. We can effect movement of cargo from anywhere in the world for delivery to destinations in Manila, Cebu, Iloilo, Cagayan de Oro, Davao, and any part of the Philippines where there is port of entry.',
    },
    {
        icon: <FaBoxOpen className="text-3xl text-green-600" />,
        title: 'Balikbayan Boxes Distribution Nationwide',
        description:
        'SOONEST Global Express Corporation offers door-to-door service from countries worldwide to any part of the Philippines (Luzon, Visayas and Mindanao). We have a wide range of support from many local agents and we utilize our own trucks to deliver the balikbayan boxes to consignee’s door.',
    },
    {
        icon: <FaPaperPlane className="text-3xl text-green-600" />,
        title: 'Export Courier Services',
        description:
        'SOONEST Global Express Corporation extends its services to parcels and documents handling. We have established a Service Contract with TNT to provide cheaper rates with quality services. Big or small, cargos are important to us, so we treat them all as high priority.',
    },
    {
        icon: <FaCogs className="text-3xl text-green-600" />,
        title: 'Project Cargo & Moving',
        description:
        'Handling Project Cargo is one of SOONEST Global Express Corporation’s strong points. We value meticulous planning and reliable execution. We have handled various projects for different industries such as Banking, Electronics, Power Plant, Fashion and Entertainment, and Construction. We strive to go beyond our clients’ expectations and surpass our team goals.',
    },
    {
        icon: <FaBalanceScale className="text-3xl text-green-600" />,
        title: 'Tariff & Tax Consultants',
        description:
        'SOONEST Global Express Corporation’s seasoned professionals are experts in handling tariff classification of imported goods, whether for consumption or warehousing entry. Our dedicated staff can also assist in liquidating bonds filed at the customs and PEZA offices to answer for duties and taxes as part of our value-added services.',
    },
    ];

    export default function International() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700">
                International Services
            </h2>
            <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-3xl mx-auto">
                SOONEST Global Express Corporation offers personalized logistics services that simplify cargo movement from start to finish.
            </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
                >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-800">
                    {service.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base text-justify">{service.description}</p>
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

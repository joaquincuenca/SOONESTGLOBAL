import React from 'react';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16 mt-10">
        <div className="mx-auto text-center max-w-7xl">
            {/* Main Image */}
            <img
            src="/images/sgec_final.png"
            alt="Soonest Global Headquarters"
            className="mx-auto mb-16 rounded-lg shadow-2xl w-full"
            style={{ maxHeight: '600px', objectFit: 'contain' }}
            />

            {/* Intro Content */}
            <h2 className="text-6xl font-bold text-green-700 mb-10">
            Welcome To Soonest Global
            </h2>
            <p className="text-gray-700 text-xl mb-10 leading-relaxed max-w-4xl mx-auto px-4">
            A Registered domestic corporation with a global reach. Our company is accredited by relevant government agencies and licensed to transact logistics-related business for local and international clients. Backed by years of experience, the company is well-recognized in the industry and enjoys the loyal patronage of major businesses and services that it serves.
            </p>
            <p className="text-gray-700 text-xl mb-10 leading-relaxed max-w-4xl mx-auto px-4">
            Our People strictly adhere to the highest degree of professional work ethics and have earned the respect of the people we worked with — the government, our clients, and industry peers.
            </p>

            <div className="text-green-800 font-semibold text-3xl mb-20">
            Ramon Olgado<br />
            <span className="text-green-600 text-xl font-normal">President / CEO</span>
            </div>

            {/* Mission, Vision, Core Values*/}
            <div className="max-w-4xl mx-auto space-y-12 px-4">
            <div className="p-8 bg-white rounded-xl shadow-lg text-left">
                <h3 className="text-4xl font-bold text-green-700 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                We are the only option in rendering fast, safe and reliable cargo management nationwide through our Road Express Delivery service and a globally diversified logistics source.
                </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg text-left">
                <h3 className="text-4xl font-bold text-green-700 mb-4">VISION</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                To be the preferred global logistics provider and the leading Filipino forwarding company offering Road Express Delivery nationwide.
                </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg text-left">
                <h3 className="text-4xl font-bold text-green-700 mb-4">CORE VALUES</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                • Honesty • Teamwork • Nobility • Customer Satisfaction • Salient Service • Employee Welfare
                </p>
            </div>
            </div>


            {/* Team Section */}
            <h3 className="text-5xl font-bold text-green-700 mt-20 mb-12">
            Team Soonest
            </h3>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 text-left px-4">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center">
                <img
                src="/images/sir_mon.png"
                alt="Ramon L. Olgado"
                className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg"
                />
                <h4 className="text-3xl font-semibold text-green-800 mb-1">Ramon L. Olgado</h4>
                <p className="text-green-600 font-medium mb-3">President / CEO</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                Logistics Services That Are Worth Your Trust. Our People strictly adhere to the highest degree of professional work ethics and have earned the respect of the people we worked with-the government, our clients, and industry peers.
                </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center">
                <img
                src="/images/tinoy_300.png"
                alt="Ramon Antonio M. Olgado"
                className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg"
                />
                <h4 className="text-3xl font-semibold text-green-800 mb-1">Ramon Antonio M. Olgado</h4>
                <p className="text-green-600 font-medium mb-3">Vice President</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                Good Service Is A Good Business. Exceptional People. Exceptional Service. At SOONEST Global Express Corporation, we always put our clients first.
                </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center">
                <img
                src="/images/myra.png"
                alt="Myra Flor Q. Genovia"
                className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg"
                />
                <h4 className="text-3xl font-semibold text-green-800 mb-1">Myra Flor Q. Genovia</h4>
                <p className="text-green-600 font-medium mb-3">Executive Assistant</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                We can facilitate transporting your goods around the world safely, securely, and cost effective. Business today does not stop at the border. We handle the intricacies of import and export freight transportation. Our experienced land, ocean, and air staff facilities the required transit, secures equipment, and compiles proper documentation to safely transport products door to door worldwide.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
}

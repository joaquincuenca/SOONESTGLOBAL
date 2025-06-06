import React from 'react';

export default function Home() {
    return (
        <section id="home" className="bg-gradient-to-b from-white to-green-50">
            {/* Hero Section */}
            <div className="h-screen flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-green-600)] mb-6">
                        Global Logistics Solutions
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl mb-8">
                        Innovative, reliable, and efficient shipping and logistics services for businesses worldwide. Your cargo, our responsibility.
                    </p>
                    <a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            const aboutSection = document.getElementById('about');
                            if (aboutSection) {
                                aboutSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="inline-block bg-[var(--color-green-600)] text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            {/* Info Cards Row */}
            <div className="bg-white py-12 px-4 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 flex-wrap">
                    <InfoCard icon="fas fa-headset" title="CALL-CENTER" text="+632 2498970" />
                    <InfoCard icon="fas fa-clock" title="WORKING HOURS" text="Weekdays: 09:00 - 19:00" />
                    <InfoCard icon="fas fa-map-marker-alt" title="OUR LOCATION" text="Jerusalem Street, BF Martinville Manuyo Dos, Las Piñas City" />
                    <InfoCard icon="fas fa-building" title="BRANCHES" text="Our total branches: 30" />
                </div>
            </div>

            {/* Company Introduction */}
            <div id="about" className="bg-white py-16 px-4 md:px-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
                    {/* Left: Text */}
                    <div className="flex-1 text-justify text-gray-700 text-base md:text-lg leading-relaxed">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-green-600)] mb-6">
                            WELCOME TO SOONEST GLOBAL
                        </h2>
                        <p>
                            SOONEST Global Express Corporation is a Filipino-owned company engaged in total complete logistics both in International & Domestic via Sea, Air and Land. Reaching twenty-five (25) years in the industry is one of our distinguishing merits. Consisting of 125 highly competent and seasoned professionals, with vast experiences in the industry, we preserve the essence of swift, efficient and innovative forwarding.
                            <br /><br />
                            SOONEST Global Express Corporation is a Securities and Exchange Commission registered domestic corporation with a global reach. Our company is accredited and licensed to transact logistic-related business for local and international clients for both Commercial and Personal Effect (Balikbayan) shipments. Backed by years of experience, the company is well recognized in the industry and enjoys the loyal patronage of major businesses as clients.
                            <br /><br />
                            SOONEST Global Express Corporation was established to address the needs of businesses who are in need of transporting goods whether international or domestic door-to-door delivery. Soonest Global Express Corporation has branch offices located in the key cities of Southern Philippines. We have also business partners in areas where the establishment of our branch is in progress. Our international trade will not become successful without the support of our Global partners located in seven continents.
                            <br /><br />
                            In almost two decades in the business, SOONEST Global Express Corporation has served the varying requirements of various industries. Our continuing growth, through our company's commitment to excellence, is a testament to the trust, loyalty, and support that our clients put on us. We have worked with various industries, such as Banking, Electronics, Power Plant, Fashion and Entertainment, and Construction. Whatever the industry, we go beyond the ordinary by rendering personalized services and involving our clients in the decision-making and customization of every transaction.
                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="flex-shrink-0 max-w-sm">
                        <img
                            src="/path-to-your-image.jpg"
                            alt="Company Illustration"
                            className="rounded-lg shadow-lg w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Delivery Section */}
            <div className="bg-green-50 py-16 px-4 md:px-16">
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-green-600)]">Quality and On Time Delivery</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <DeliveryCard icon="fas fa-truck-fast" title="1 Day Delivery" area="Within Metro Manila and nearby Area" />
                    <DeliveryCard icon="fas fa-route" title="DELIVERY 1-2 DAYS" area="LUZON AREA" />
                    <DeliveryCard icon="fas fa-shipping-fast" title="DELIVERY 2-3 DAYS" area="VISAYAS AREA" />
                    <DeliveryCard icon="fas fa-box" title="DELIVERY 2-3 DAYS" area="MINDANAO AREA" />
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-white py-16 px-4 md:px-16">
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-green-600)]">Our Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <ServiceCard icon="fas fa-file-alt" title="Reports & Shipment" text="Professional experience" />
                    <ServiceCard icon="fas fa-warehouse" title="Package Storage" text="Professional experience" />
                    <ServiceCard icon="fas fa-file-contract" title="Company Contract" text="Professional experience" />
                    <ServiceCard icon="fas fa-door-open" title="Door To Door Service" text="Professional experience" />
                </div>
            </div>
        </section>
    );
}

// Reusable InfoCard Component
function InfoCard({ icon, title, text }) {
    return (
        <div className="flex-1 min-w-[200px] bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 group cursor-pointer text-center">
            <i className={`${icon} text-3xl text-[var(--color-green-600)] mb-3 group-hover:text-green-900 transition`}></i>
            <h3 className="text-lg font-bold text-[var(--color-green-600)] group-hover:text-green-900 transition">{title}</h3>
            <p className="text-gray-700 group-hover:text-gray-900">{text}</p>
        </div>
    );
}

// Reusable DeliveryCard Component
function DeliveryCard({ icon, title, area }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:shadow-xl hover:-translate-y-1 duration-300 group cursor-pointer">
            <i className={`${icon} text-4xl text-[var(--color-green-600)] mb-4 group-hover:text-green-800 transition`}></i>
            <h3 className="text-xl font-semibold text-[var(--color-green-600)] group-hover:text-green-900">{title}</h3>
            <p className="text-gray-700 mt-2 group-hover:text-gray-900">{area}</p>
        </div>
    );
}

// Reusable ServiceCard Component
function ServiceCard({ icon, title, text }) {
    return (
        <div className="bg-green-50 rounded-2xl shadow-md p-6 text-center transition hover:shadow-xl hover:-translate-y-1 duration-300 group cursor-pointer">
            <i className={`${icon} text-4xl text-[var(--color-green-600)] mb-4 group-hover:text-green-900 transition`}></i>
            <h3 className="text-xl font-semibold text-[var(--color-green-600)] group-hover:text-green-900">{title}</h3>
            <p className="text-gray-700 mt-2 group-hover:text-gray-900">{text}</p>
        </div>
    );
}

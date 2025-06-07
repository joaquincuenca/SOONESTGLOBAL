export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50 text-gray-800 mt-8">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-blue-700">Contact Us</h2>
                    <p className="text-gray-600 mt-2">
                        We’d love to hear from you. Whether you have a question or just want to say hello.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-10">
                    {/* Left: Contact Form */}
                    <div className="md:w-1/2 bg-white p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-700">Send a Message</h3>
                        <form className="grid gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right: Scrollable Office Cards */}
                    <div className="md:w-1/2 h-[600px] overflow-y-auto space-y-6 pr-2">
                        {[
                            {
                                title: 'Manila - Head Office',
                                address: '1908 - L.M Guazon St. Paco, Manila',
                                phone: '+63 2 85594879',
                                email: 'info@soonestglobal.com',
                            },
                            {
                                title: 'Cebu City Office',
                                address: '1908 - L.M Guazon St. Paco, Manila',
                                phone: '+63 2 85594879',
                                email: 'operations@soonestglobal.com',
                            },
                            {
                                title: 'Las Piñas Office & Warehouse',
                                address: 'BF Martintville Manuyo Dos, Las Piñas City',
                                phone: '+63 2 85498970',
                                email: 'info@soonestglobal.com',
                            },
                            {
                                title: 'Tacloban Office',
                                address: 'Brgy. Cogon, Palo, Leyte',
                                phone: '+63 9122944593',
                                email: 'logisado@gmail.com',
                            },
                            {
                                title: 'Davao Office',
                                address: 'Door 205 2/F Eblani Trading Bldg, Davao City',
                                phone: '+63 82 2981603 / 2331519 / 2333460',
                                email: 'csdavao@soonestglobal.com',
                            },
                            {
                                title: 'Baguio Office',
                                address: 'Session Road, Baguio City',
                                phone: '+63 74 422 1234',
                                email: 'baguio@soonestglobal.com',
                            },
                        ].map((office, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="text-lg font-semibold text-blue-700 mb-2">{office.title}</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-start gap-3">
                                        <i className="fa-solid fa-location-dot text-red-600 mt-1"></i>
                                        <span>{office.address}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <i className="fa-solid fa-phone text-green-600 mt-1"></i>
                                        <span><strong>Tel:</strong> {office.phone}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <i className="fa-solid fa-envelope text-blue-600 mt-1"></i>
                                        <span><strong>Email:</strong> <a href={`mailto:${office.email}`} className="text-blue-600 underline">{office.email}</a></span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <i className="fa-brands fa-viber text-purple-600 mt-1"></i>
                                        <span><strong>Viber:</strong> SoonestGlobal</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <i className="fa-brands fa-facebook text-blue-600 mt-1"></i>
                                        <span><strong>Facebook:</strong> SoonestGlobal</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

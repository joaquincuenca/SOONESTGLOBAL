export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-blue-700">Contact Us</h2>
                <p className="text-gray-600 mb-8">
                    Get in touch for collaboration or inquiries.
                </p>

                {/* Flex container for form and cards */}
                <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-12 text-left items-start">
                    {/* Form on the left */}
                    <form className="md:w-1/2 grid gap-4">
                        <input type="text" placeholder="Your Name" className="border px-4 py-2 rounded w-full" />
                        <input type="email" placeholder="Your Email" className="border px-4 py-2 rounded w-full" />
                        <textarea rows="4" placeholder="Your Message" className="border px-4 py-2 rounded w-full" />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                            Send Message
                        </button>
                    </form>

                    {/* Contact Cards on the right */}
                    <div className="md:w-1/2 grid grid-cols-1 gap-6">
                        {[
                            {
                                title: 'Philippines Manila - Head Office',
                                address: '1908 - L.M Guazon St. Paco, Manila',
                                phone: '+63 2 85594879',
                                email: 'info@soonestglobal.com',
                            },
                            {
                                title: 'Philippines Cebu City Office',
                                address: '1908 - L.M Guazon St. Paco, Manila',
                                phone: '+63 2 85594879',
                                email: 'operations@soonestglobal.com',
                            },
                            {
                                title: 'Philippines Las Piñas City (Office & Warehouse)',
                                address: 'BF Martintville Manuyo Dos, Las Piñas City',
                                phone: '+63 2 85498970',
                                email: 'info@soonestglobal.com',
                            },
                            {
                                title: 'Philippines Tacloban Office',
                                address: 'Brgy. Cogon, Palo, Leyte',
                                phone: '+63 9122944593',
                                email: 'logisado@gmail.com',
                            },
                            {
                                title: 'Philippines Davao Office',
                                address: 'Door 205 2/F Eblani Trading Bldg, Davao City',
                                phone: '+63 82 2981603 / 2331519 / 2333460',
                                email: 'csdavao@soonestglobal.com',
                            },
                            {
                                title: 'Philippines Baguio Office',
                                address: 'Session Road, Baguio City',
                                phone: '+63 74 422 1234',
                                email: 'baguio@soonestglobal.com',
                            },
                        ].map((office, index) => (
                            <div
                                key={index}
                                className="rounded-lg shadow-md p-6"
                                style={{ backgroundColor: '#E9ECEF' }}
                            >
                                <h3 className="text-blue-700 font-semibold mb-2">{office.title}</h3>
                                <p className="text-sm mb-1 flex items-center gap-2">
                                    <i className="fa-solid fa-location-dot text-red-600"></i> {office.address}
                                </p>
                                <p className="text-sm mb-1 flex items-center gap-2">
                                    <i className="fa-solid fa-phone text-green-600"></i>
                                    <strong>Tel. No</strong>: {office.phone}
                                </p>
                                <p className="text-sm flex items-center gap-2">
                                    <i className="fa-solid fa-envelope text-blue-600"></i>
                                    <strong>Email</strong>:{' '}
                                    <a href={`mailto:${office.email}`} className="text-blue-600 underline">
                                        {office.email}
                                    </a>
                                </p>
                                <p className="text-sm mt-2 flex items-center gap-2">
                                    <i className="fa-brands fa-viber text-purple-600"></i> <strong>Viber</strong>: SoonestGlobal
                                </p>
                                <p className="text-sm flex items-center gap-2">
                                    <i className="fa-brands fa-facebook text-blue-600"></i> <strong>Facebook</strong>: SoonestGlobal
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

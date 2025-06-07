export default function Services() {
    const services = [
        {
            title: "Balikbayan Search",
            description: 'Search your invoice tracking number here. Just fill up the "search here" and click search button. All the status information...',
            image: "https://cdn-icons-png.flaticon.com/512/747/747376.png"
        },
        {
            title: "Career",
            description: "We have vacant position for the following: 3 Internal Auditor, 5 Sales Executive, 5 Accounting Clerk, 5 Customer Service, 10...",
            image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        },
        {
            title: "Domestic Services",
            description: "SOONEST Global Express Corporation delivers cargo with speed and reliability by LAND, AIR, and SEA. We are given guaranteed space...",
            image: "https://cdn-icons-png.flaticon.com/512/1995/1995504.png"
        },
        {
            title: "International Services",
            description: "SOONEST Global Express Corporation offers a wide range of services delivered at above industry standards. We offer a personalized service that...",
            image: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
        },
        {
            title: "Allied Services",
            description: "While every other logistics company promises to be on par with the best, we endeavor to give more, remaining steadfast...",
            image: "https://cdn-icons-png.flaticon.com/512/3135/3135712.png"
        },
        {
            title: "Accreditations",
            description: "Certified and recognized by leading logistics and transportation bodies across the globe for excellence and commitment.",
            image: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
        }
    ];

    return (
        <section id="services" className="py-20 bg-blue-50 relative mt-5">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-green-600 text-center">Our Services</h2>
                <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-center">
                    We provide comprehensive logistics solutions to meet your business needs, ensuring timely and secure delivery of your cargo worldwide.
                </p>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-6 transition transform hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <img src={service.image} alt={service.title} className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-center text-green-700">{service.title}</h3>
                            <p className="text-gray-600 text-sm text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

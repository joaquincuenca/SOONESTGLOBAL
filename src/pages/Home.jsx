import React, { useState, useEffect } from 'react';

const heroImages = [
  '/images/bg.png',
  '/images/bg1.png',
  '/images/bg2.png',
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-gradient-to-b from-white to-green-50">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center bg-white transition-background duration-700 ease-in-out">
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 max-w-6xl px-6 sm:px-10 text-left">
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Global Logistics Solutions
            </h1>
            <p className="text-green-100 text-base sm:text-lg md:text-xl mb-8 drop-shadow-sm leading-relaxed">
              Innovative, reliable, and efficient shipping and logistics services for businesses worldwide. Your cargo, our responsibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/fare-rate"
                className="inline-block bg-[#085200] text-white border border-[#085200] px-6 py-3 font-medium hover:bg-green-800 transition shadow rounded-[10px]"
              >
                Calculate Shipping Cost
              </a>
              <a
                href="/fare-rate"
                className="inline-block bg-white text-[#595959] border border-[#595959] px-6 py-3 font-medium transition-all duration-200 shadow rounded-[10px] hover:bg-[#f5f5f5] hover:text-black hover:border-black hover:shadow-md"
              >
                Track Your Package
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-white py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Left */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-green-600)] mb-6">
              Welcome to Soonest Global Express Corporation
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              SOONEST Global Express Corporation is a Filipino-owned logistics company with over 25 years of experience in international and domestic
              shipping via sea, air, and land. With 125 seasoned professionals, we provide swift, efficient, and innovative forwarding solutions. Accredited by the SEC and licensed for both commercial and personal (Balikbayan) shipments, we serve clients across various industries—including banking, electronics, fashion, and construction. Our presence spans key cities in Southern Philippines and international partnerships across all seven continents, ensuring reliable global reach and personalized service.
            </p>
          </div>

          {/* Image Right */}
          <div className="md:w-1/2">
            <img
              src="/images/icon1.png" // Change to your actual image path
              alt="Soonest Global Express"
              className="rounded-xl shadow-lg w-full object-cover max-h-[400px]"
            />
          </div>
        </div>
      </div>


      {/* Services Section */}
      <div className="bg-white py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-green-600)]">Our Logistics Services</h2>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
            Comprehensive shipping solutions tailored to meet your global logistics needs with reliability and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ServiceCard title="Balikbayan Search" text="Search your invoice tracking number here. Just fill up the 'search here' and click search button. All the status information..." />
          <ServiceCard title="Career" text="We have vacant position for the following: 3 Internal Auditor 5 Sales Executive 5 Accounting Clerk 5 Customer Service 10..." />
          <ServiceCard title="Domestic Services" text="SOONEST Global Express Corporation delivers cargo with speed and reliability by LAND, AIR, and SEA. We are given guaranteed space..." />
          <ServiceCard title="International Services" text="SOONEST Global Express Corporation offers a wide range of services delivered at above industry standards. We offer a personalized service that..." />
          <ServiceCard title="Allied Services" text="While every other logistics company promises to be on par with the best, we endeavor to give more, remaining steadfast..." />
          <ServiceCard title="Accreditations" text="SOONEST Global Express Corporation is accredited by relevant authorities to ensure the highest standards in logistics services." />
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

      {/* Statistics Section */}
      <div className="bg-white py-20 px-4 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-green-600)]">
            We always put our client first.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
          <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-[var(--color-green-600)]">20,154</h3>
            <p className="text-gray-700 mt-2">Delivered Packages</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-[var(--color-green-600)]">524,545</h3>
            <p className="text-gray-700 mt-2">KM Per Year</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-[var(--color-green-600)]">3,246</h3>
            <p className="text-gray-700 mt-2">Projects Done</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-[var(--color-green-600)]">954</h3>
            <p className="text-gray-700 mt-2">Branches</p>
          </div>
        </div>
      </div>
    </section>
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
      {icon && (
        <i className={`${icon} text-4xl text-[var(--color-green-600)] mb-4 group-hover:text-green-900 transition`}></i>
      )}
      <h3 className="text-xl font-semibold text-[var(--color-green-600)] group-hover:text-green-900">{title}</h3>
      <p className="text-gray-700 mt-2 group-hover:text-gray-900">{text}</p>
    </div>
  );
}

import React, { useState } from 'react';

export default function FareCalculator() {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [weight, setWeight] = useState('');
    const [price, setPrice] = useState(null);

    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingInfo, setTrackingInfo] = useState(null);

    const handleCalculate = (e) => {
        e.preventDefault();
        const ratePerKg = 10;
        const baseRatePerKm = 5;
        const staticDistance = 10; // fixed for now
        const totalFare = (parseFloat(weight) * ratePerKg) + (staticDistance * baseRatePerKm);
        setPrice(totalFare);
    };

    const handleTrack = () => {
        // Simulate tracking lookup
        if (trackingNumber.trim() === '') return;
        setTrackingInfo({
            status: 'In Transit',
            location: 'Paranaque City to Las Piñas',
            eta: 'June 15, 2025',
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col items-center justify-start pt-24 px-6">
            {/* Title Section */}
            <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-2">
                    Balik Bayan Box Fare Calculator
                </h1>
                <p className="text-gray-600 text-lg">
                    Get instant pricing for your shipment based on weight and destination
                </p>
            </div>

            {/* Calculator Box */}
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-8 border border-green-100 flex flex-col md:flex-row gap-8 relative">
                {/* Left Form Section */}
                <div className="flex-1">
                    <div className="absolute -top-5 left-1/2 md:left-10 transform -translate-x-1/2 md:translate-x-0 bg-green-500 text-white px-6 py-1 rounded-full text-sm font-bold shadow-md text-center md:text-left">
                        Fare Rate Calculator
                    </div>

                    <form onSubmit={handleCalculate} className="space-y-6 mt-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                            {/* Pickup */}
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-600 mb-1">Pickup Location</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={pickup}
                                        onChange={(e) => setPickup(e.target.value)}
                                        className="rounded-xl border border-gray-300 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 shadow-inner"
                                        placeholder="Enter pickup"
                                        required
                                    />
                                    <span className="absolute right-3 top-3 text-gray-400">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </span>
                                </div>
                            </div>

                            {/* Destination */}
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-600 mb-1">Destination</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        className="rounded-xl border border-gray-300 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 shadow-inner"
                                        placeholder="Enter destination"
                                        required
                                    />
                                    <span className="absolute right-3 top-3 text-gray-400">
                                        <i className="fas fa-location-arrow"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Weight */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600 mb-1">Package Weight (kg)</label>
                            <input
                                type="number"
                                min="0"
                                step="0.1"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="rounded-xl border border-gray-300 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 shadow-inner"
                                placeholder="e.g. 5.5"
                                required
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition transform hover:scale-105 flex items-center gap-2"
                            >
                                <i className="fas fa-calculator"></i> Calculate Fare
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Result Section */}
                <div className="flex-1 bg-green-50 rounded-2xl border border-green-200 p-6 flex flex-col justify-center items-start shadow-inner">
                    <h3 className="text-lg font-bold text-green-700 mb-3">Fare Calculation Summary</h3>
                    {price !== null ? (
                        <div className="space-y-2 text-green-900 w-full">
                            <div className="flex items-center justify-between border-b pb-1">
                                <span className="font-medium">Pickup Location:</span>
                                <span>{pickup}</span>
                            </div>
                            <div className="flex items-center justify-between border-b pb-1">
                                <span className="font-medium">Destination:</span>
                                <span>{destination}</span>
                            </div>
                            <div className="flex items-center justify-between border-b pb-1">
                                <span className="font-medium">Package Weight:</span>
                                <span>{weight} kg</span>
                            </div>
                            <div className="flex items-center justify-between mt-4 text-xl font-extrabold border-t pt-4">
                                <span>Total Fare:</span>
                                <span>₱{price.toFixed(2)}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="text-gray-500 text-sm">Enter details to see fare summary</div>
                    )}
                </div>
            </div>

            {/* Tracking Section */}
            <div className="w-full max-w-6xl mt-16 bg-green-50 rounded-3xl shadow-2xl p-8 border border-green-200 relative mb-10">
                <div className="absolute -top-5 left-1/2 md:left-10 transform -translate-x-1/2 md:translate-x-0 bg-green-500 text-white px-6 py-1 rounded-full text-sm font-bold shadow-md text-center md:text-left">
                    Track Your Package
                </div>

                <div className="text-center md:text-left mb-8 mt-6">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-2">
                        Package Tracking
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Stay updated with real-time tracking information for your shipments
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                    <input
                        type="text"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        placeholder="Enter your tracking number"
                        className="w-full md:flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-inner"
                    />
                    <button
                        onClick={handleTrack}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition transform hover:scale-105 flex items-center gap-2"
                    >
                        <i className="fas fa-search"></i> Track
                    </button>
                </div>

                {trackingInfo && (
                    <div className="mt-6 bg-white p-4 rounded-xl border border-green-200 shadow-inner">
                        <h3 className="text-lg font-bold text-green-700 mb-2">Tracking Result</h3>
                        <ul className="text-sm text-green-900 space-y-1">
                            <li><strong>Status:</strong> {trackingInfo.status}</li>
                            <li><strong>Last Location:</strong> {trackingInfo.location}</li>
                            <li><strong>Estimated Delivery:</strong> {trackingInfo.eta}</li>
                        </ul>
                    </div>
                )}
            </div>

        </div>
    );
}

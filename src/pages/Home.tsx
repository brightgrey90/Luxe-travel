import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to LuxeTravel</h1>
        <p className="text-xl text-gray-600">Discover luxury travel experiences around the world</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/flights" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Flights</h2>
          <p className="text-gray-600">Find the best deals on luxury flights</p>
        </Link>
        <Link to="/hotels" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Hotels</h2>
          <p className="text-gray-600">Discover top-rated luxury accommodations</p>
        </Link>
        <Link to="/tours" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Tours</h2>
          <p className="text-gray-600">Explore exclusive guided experiences</p>
        </Link>
        <Link to="/weather" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Weather</h2>
          <p className="text-gray-600">Check the forecast for your destination</p>
        </Link>
      </section>

      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Add featured destinations here */}
        </div>
      </section>
    </div>
  );
};

export default Home;
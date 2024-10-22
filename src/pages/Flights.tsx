import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const Flights: React.FC = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulated API call
    const fetchFlights = async () => {
      setLoading(true);
      // Replace with actual API call when integrated
      setTimeout(() => {
        setFlights([
          { id: 1, from: 'New York', to: 'Paris', price: 1200, airline: 'LuxeAir' },
          { id: 2, from: 'London', to: 'Tokyo', price: 1500, airline: 'SkyLuxe' },
          { id: 3, from: 'Dubai', to: 'Maldives', price: 800, airline: 'EmiratesPlus' },
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchFlights();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Luxury Flights</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Search Flights</h2>
        <form className="flex flex-wrap gap-4">
          <input type="text" placeholder="From" className="flex-grow p-2 border rounded" />
          <input type="text" placeholder="To" className="flex-grow p-2 border rounded" />
          <input type="date" className="flex-grow p-2 border rounded" />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300 flex items-center">
            <Search className="w-5 h-5 mr-2" />
            Search
          </button>
        </form>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading flights...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flights.map((flight: any) => (
            <div key={flight.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{flight.from} to {flight.to}</h3>
              <p className="text-gray-600 mb-2">Airline: {flight.airline}</p>
              <p className="text-2xl font-bold text-gray-800">${flight.price}</p>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Flights;
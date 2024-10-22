import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock } from 'lucide-react';

const Tours: React.FC = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulated API call
    const fetchTours = async () => {
      setLoading(true);
      // Replace with actual API call when integrated
      setTimeout(() => {
        setTours([
          { id: 1, name: 'Eiffel Tower VIP Tour', location: 'Paris', duration: '3 hours', price: 150 },
          { id: 2, name: 'Luxury Yacht Cruise', location: 'French Riviera', duration: '6 hours', price: 500 },
          { id: 3, name: 'Private Louvre Experience', location: 'Paris', duration: '4 hours', price: 300 },
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchTours();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Exclusive Tours & Experiences</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Discover Unique Experiences</h2>
        <form className="flex flex-wrap gap-4">
          <input type="text" placeholder="Destination" className="flex-grow p-2 border rounded" />
          <input type="date" placeholder="Date" className="flex-grow p-2 border rounded" />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300 flex items-center">
            <Search className="w-5 h-5 mr-2" />
            Search
          </button>
        </form>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading tours...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour: any) => (
            <div key={tour.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{tour.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                {tour.location}
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-5 h-5 mr-2" />
                {tour.duration}
              </div>
              <p className="text-2xl font-bold text-gray-800 mt-4">${tour.price} <span className="text-sm font-normal text-gray-600">per person</span></p>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
                Book Experience
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tours;
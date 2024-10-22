import React, { useState, useEffect } from 'react';
import { Search, Star } from 'lucide-react';

const Hotels: React.FC = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulated API call
    const fetchHotels = async () => {
      setLoading(true);
      // Replace with actual API call when integrated
      setTimeout(() => {
        setHotels([
          { id: 1, name: 'Grand Luxe Hotel', location: 'Paris', price: 500, rating: 5 },
          { id: 2, name: 'Royal Skyline Resort', location: 'New York', price: 600, rating: 4.5 },
          { id: 3, name: 'Oasis Retreat', location: 'Bali', price: 400, rating: 4.8 },
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchHotels();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Luxury Hotels</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Find Your Perfect Stay</h2>
        <form className="flex flex-wrap gap-4">
          <input type="text" placeholder="Destination" className="flex-grow p-2 border rounded" />
          <input type="date" placeholder="Check-in" className="flex-grow p-2 border rounded" />
          <input type="date" placeholder="Check-out" className="flex-grow p-2 border rounded" />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300 flex items-center">
            <Search className="w-5 h-5 mr-2" />
            Search
          </button>
        </form>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading hotels...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel: any) => (
            <div key={hotel.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{hotel.name}</h3>
              <p className="text-gray-600 mb-2">{hotel.location}</p>
              <div className="flex items-center mb-2">
                {[...Array(Math.floor(hotel.rating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600">{hotel.rating}</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">${hotel.price} <span className="text-sm font-normal text-gray-600">per night</span></p>
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

export default Hotels;
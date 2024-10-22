import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Hotel, Map, Sun } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-indigo-600">LuxeTravel</Link>
          <ul className="flex space-x-6">
            <li>
              <Link to="/flights" className="flex items-center text-gray-600 hover:text-indigo-600">
                <Plane className="w-5 h-5 mr-1" />
                Flights
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="flex items-center text-gray-600 hover:text-indigo-600">
                <Hotel className="w-5 h-5 mr-1" />
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/tours" className="flex items-center text-gray-600 hover:text-indigo-600">
                <Map className="w-5 h-5 mr-1" />
                Tours
              </Link>
            </li>
            <li>
              <Link to="/weather" className="flex items-center text-gray-600 hover:text-indigo-600">
                <Sun className="w-5 h-5 mr-1" />
                Weather
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
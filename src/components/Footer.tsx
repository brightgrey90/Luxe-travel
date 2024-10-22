import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">LuxeTravel</h3>
            <p className="text-gray-300">Discover luxury travel experiences around the world.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/flights" className="text-gray-300 hover:text-white">Flights</Link></li>
              <li><Link to="/hotels" className="text-gray-300 hover:text-white">Hotels</Link></li>
              <li><Link to="/tours" className="text-gray-300 hover:text-white">Tours</Link></li>
              <li><Link to="/weather" className="text-gray-300 hover:text-white">Weather</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-300">Email: info@luxetravel.com</p>
            <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; 2024 LuxeTravel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Search, Sun, Cloud, CloudRain, Wind } from 'lucide-react';

const Weather: React.FC = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulated API call
    setTimeout(() => {
      setWeather({
        location: 'Paris, France',
        temperature: 22,
        condition: 'Sunny',
        humidity: 60,
        windSpeed: 10
      });
      setLoading(false);
    }, 1000);
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="w-16 h-16 text-yellow-400" />;
      case 'cloudy':
        return <Cloud className="w-16 h-16 text-gray-400" />;
      case 'rainy':
        return <CloudRain className="w-16 h-16 text-blue-400" />;
      default:
        return <Sun className="w-16 h-16 text-yellow-400" />;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Weather Forecast</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Check Weather for Your Destination</h2>
        <form onSubmit={handleSearch} className="flex gap-4">
          <input type="text" placeholder="Enter city or destination" className="flex-grow p-2 border rounded" />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300 flex items-center">
            <Search className="w-5 h-5 mr-2" />
            Search
          </button>
        </form>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading weather data...</p>
      ) : weather ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{weather.location}</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {getWeatherIcon(weather.condition)}
              <div className="ml-4">
                <p className="text-4xl font-bold text-gray-800">{weather.temperature}°C</p>
                <p className="text-xl text-gray-600">{weather.condition}</p>
              </div>
            </div>
            <div>
              <p className="flex items-center text-gray-600 mb-2">
                <Wind className="w-5 h-5 mr-2" />
                Wind: {weather.windSpeed} km/h
              </p>
              <p className="flex items-center text-gray-600">
                <CloudRain className="w-5 h-5 mr-2" />
                Humidity: {weather.humidity}%
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
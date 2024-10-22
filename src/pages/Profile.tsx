import React from 'react';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <>
      <SEO 
        title="Your Profile" 
        description="View and manage your LuxeTravel profile"
      />
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Profile</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Personal Information</h2>
            <p className="text-gray-600">Name: {user.name}</p>
            <p className="text-gray-600">Email: {user.email}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Preferences</h2>
            {/* Add user preferences here */}
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Booking History</h2>
            {/* Add booking history here */}
          </div>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
          >
            Log out
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
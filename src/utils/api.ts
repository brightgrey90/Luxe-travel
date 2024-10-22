import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with actual API base URL

export const fetchFlights = async (from: string, to: string, date: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/flights`, {
      params: { from, to, date }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching flights:', error);
    throw error;
  }
};

export const fetchHotels = async (location: string, checkIn: string, checkOut: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hotels`, {
      params: { location, checkIn, checkOut }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching hotels:', error);
    throw error;
  }
};

export const fetchTours = async (location: string, date: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tours`, {
      params: { location, date }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching tours:', error);
    throw error;
  }
};

export const fetchWeather = async (location: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather`, {
      params: { location }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
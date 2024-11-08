import axios from 'axios';

const API_URL = 'https://api-appointments.thesparksolutionz.com/api/auth/';

// Login function
const login = async (email, password) => {
  const response = await axios.post(`${API_URL}login`, { email, password });
  // Save the token in localStorage or a similar method
  localStorage.setItem('token', response.data.token);
  return response.data;
};

// Signup function
const signup = async (email, password, otherFields) => {
  const response = await axios.post(`${API_URL}signup`, {
    email,
    password,
    ...otherFields, // If there are additional fields like name, etc.
  });
  return response.data;
};

// Logout function
const logout = () => {
  localStorage.removeItem('token');
};

const authService = {
  login,
  signup,
  logout,
};

export default authService;

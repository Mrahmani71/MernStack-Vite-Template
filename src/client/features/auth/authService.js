import axios from 'axios';

const API_URL = 'api/user';

// Register User
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    axios.defaults.withCredentials = true;
  }

  return response.data;
};

// Login User

const login = async (userData) => {
  const response = await axios.post(API_URL + '/login', userData);

  if (response.data) {
    axios.defaults.withCredentials = true;
  }
  return response.data;
};

// Logout User
const logout = async () => {
  await axios.get(API_URL + '/logout');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;

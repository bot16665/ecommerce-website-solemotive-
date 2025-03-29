import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: '', // your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

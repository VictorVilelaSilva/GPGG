import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gpgg.glitch.me'
});

api.interceptors.request.use(
  (config) => {
    console.log('Request Headers:', config.headers);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
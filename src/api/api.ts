import axios from 'axios';

export const basePath = import.meta.env.BASE_URL;

export const api = axios.create({
  baseURL: basePath,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('csrfToken');
  if (token) config.headers['x-csrftoken'] = token;
  return config;
});

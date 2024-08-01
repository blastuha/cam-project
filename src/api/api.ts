import axios from 'axios';
import { Configuration, UserApi } from '../generated/openapi/main-api';

export const basePath = import.meta.env.BASE_URL;

export const api = axios.create({
  baseURL: basePath,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');

  config.headers['accept'] = 'application/json';

  console.log('Token:', token);
  if (token) {
    config.headers['Authorization'] = `Bearer ${token.replace(/"/g, '')}`; // Добавление токена в заголовок
  }
  return config;
});

export const userApi = new UserApi(
  new Configuration({
    basePath,
  }),
  basePath,
  api
);

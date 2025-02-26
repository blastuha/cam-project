import axios from 'axios';
import {
  AnalyzerApi,
  Configuration,
  UserApi,
} from '@generated/openapi/main-api/';

// export const basePath = import.meta.env.VITE_API_URL;
export const basePath = import.meta.env.VITE_API_URL;
console.log('basePath', basePath);

export const api = axios.create({
  // baseURL: basePath,
  // baseURL: 'http://localhost:5173',
  baseURL: 'https://aicams.yc-dev.bmit.ai',
  // baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');

  config.headers['accept'] = 'application/json';

  if (token) {
    config.headers['Authorization'] = `Bearer ${token.replace(/"/g, '')}`; // Добавление токена в заголовок + удаление кавычек
  }
  return config;
});

// userApi
export const userApi = new UserApi(
  new Configuration({
    basePath,
  }),
  basePath,
  api
);

// analyzerApi
export const analyzerApi = new AnalyzerApi(
  new Configuration({
    basePath,
  }),
  basePath,
  api
);

import axios from 'axios';
import { Configuration, UserApi } from '../generated/openapi/main-api';

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

export const userApi = new UserApi(
  new Configuration({
    basePath,
  }),
  basePath,
  api
);

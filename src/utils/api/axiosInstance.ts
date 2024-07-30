import axios from 'axios';
import React from 'react';

export const axiosInstance = () => {
  return axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

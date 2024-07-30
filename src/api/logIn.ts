import React from 'react';
import { API_URL } from '@utils/constants';
import axios from 'axios';

export const logIn = () => {
  // const url = `${API_URL}/user/login`;
  const url = '/api/v1/user/login';

  return axios.post(
    url,
    {
      username: 'root',
      password: 'root',
    },
    {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken':
          'jQahDMRXbpZp8aEFqbuQ5rZk8kE1TdN4zyitNpVHA52yA3TrrLsUdPFzwfylUK2y',
      },
    }
  );
};

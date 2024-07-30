import React from 'react';
import axios from 'axios';

type LogInReponse = {
  success: boolean;
  data: {
    token: string;
  };
  error: null | string;
};

export const logIn = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const url = '/api/v1/user/login';

  return axios.post<LogInReponse>(
    url,
    {
      username,
      password,
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

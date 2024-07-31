import React from 'react';
import { Navigate } from 'react-router-dom';
// import { isAuthenticated } from '../utils/auth';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

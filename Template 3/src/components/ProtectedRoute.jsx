import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // If authenticated, render the children components
  return children;
};

export default ProtectedRoute;

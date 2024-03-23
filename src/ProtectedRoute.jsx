import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthProvider'; // Import your authentication context

const ProtectedRoute = ({ element, ...props }) => {
  const { user } = useAuth(); // Use your authentication context to check if the user is authenticated

  return user ? <Route {...props} element={element} /> : <Navigate to="/login" />; // Render the requested component if the user is authenticated, otherwise redirect to the login page
};

export default ProtectedRoute;
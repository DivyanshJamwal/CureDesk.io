// src/Context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';
import { signin, signup } from '../services/api'; // Adjust the path as needed

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const response = await signin(credentials);
      if (response.data && response.data.user) {
        setUser(response.data.user);
        return response.data.user;
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const register = async (credentials) => {
    try {
      const response = await signup(credentials);
      if (response.data && response.data.user) {
        setUser(response.data.user);
        return response.data.user;
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

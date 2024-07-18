// src/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

export const signup = (userData) => {
  return axios.post(`${API_URL}/signup`, userData);
};

export const login = (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};

export const forgotPassword = (email) => {
  return axios.post(`${API_URL}/forgot-password`, { email });
};

export const resetPassword = (token, newPassword) => {
  return axios.post(`${API_URL}/reset-password/${token}`, { newPassword });
};

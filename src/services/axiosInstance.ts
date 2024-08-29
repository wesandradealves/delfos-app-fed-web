// services/axiosInstance.ts
import axios from 'axios';
import { useContext } from 'react';
import { LoadingContext } from '../contexts/LoadingContext';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || '',
});

axiosInstance.interceptors.request.use((config) => {
  useContext(LoadingContext).setLoading(true);
  return config;
}, (error) => {
  useContext(LoadingContext).setLoading(false);
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
  useContext(LoadingContext).setLoading(false);
  return response;
}, (error) => {
  useContext(LoadingContext).setLoading(false);
  return Promise.reject(error);
});

export default axiosInstance;
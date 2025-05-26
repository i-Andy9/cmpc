import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const login = async (username: string, password: string) => {
  const { data } = await axios.post(`${API_URL}/user/auth/login`, {
    username,
    password,
  });
  return data;
};

export const register = async (
  username: string,
  password: string,
  email: string
) => {
  const { data } = await axios.post(`${API_URL}/user/auth/register`, {
    username,
    password,
    email,
  });
  return data;
};

export const logout = async (token: string) => {
  return axios.get(`${API_URL}/user/auth/logout`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const requestPasswordReset = async (email: string) => {
  const { data } = await axios.post(`${API_URL}/user/request-password-reset`, {
    email,
  });
  return data;
};

export const resetPassword = async (
  resetToken: string,
  newPassword: string
) => {
  const { data } = await axios.post(`${API_URL}/user/reset-password`, {
    resetToken,
    newPassword,
  });
  return data;
};

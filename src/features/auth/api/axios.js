import axios from "axios";

// Instance axios dengan baseURL dari environment variable
const api = axios.create({
  baseURL: import.meta.env.VITE_DELCOM_BASEURL, // contoh: https://open-api.delcom.org/api/v1
  headers: {
    "Content-Type": "application/json",
  },
});

// Tambahkan token otomatis jika ada di localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

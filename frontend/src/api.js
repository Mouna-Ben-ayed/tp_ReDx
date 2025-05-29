import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "http";

// const api = axios.create({
//   baseURL: "http://backend-app:8000"
// });

const api = axios.create({
  baseURL: "http://54.198.102.245:8000"
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

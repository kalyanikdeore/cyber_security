import axios from "axios";

// Base URL for uploaded files (images)
export const fileBaseURL = "http://127.0.0.1:8000/uploads/";

// Base URL for API requests
export const API_BASE_URL = "http://127.0.0.1:8000/api/";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;

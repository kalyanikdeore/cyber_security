import axios from "axios";

const axiosInstance = axios.create({
//   baseURL: "https://dentalcarenasik.demovoting.com/api",
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// export const fileBaseURL = "https://dentalcarenasik.demovoting.com/uploads/";
export const fileBaseURL = "http://127.0.0.1:8000/uploads/";

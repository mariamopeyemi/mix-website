import axios from "axios";

export const axiosBaseInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_DEVELOPMENT_URL,
  baseURL: 'https://staging-api.planvest.africa/v1/',
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axiosBaseInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.common["Authorization"] = `Bearer ${localStorage?.getItem("token")}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

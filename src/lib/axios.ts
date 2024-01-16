import axios, { AxiosInstance } from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const BEARER = import.meta.env.VITE_BEARER;
console.log(BASE_URL, BEARER);

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(async (request) => {
  request.headers.set(
    "Authorization",
    BEARER
  );

  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export { axiosInstance };

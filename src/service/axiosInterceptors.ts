import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response: AxiosResponse<any, any>) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    toast(error.message, {
      onClose: () => alert("Called when I close"),
    });

    return Promise.reject(error);
  }
);

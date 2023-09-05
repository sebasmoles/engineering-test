import axios from "axios";

const baseURL = import.meta.env?.VITE_APP_API_URL ?? location.origin;

const axiosConfig = {
  baseURL,
  headers: {
    Accept: "application/json",
  },
};

const baseConfig = axios.create(axiosConfig);

export default baseConfig;

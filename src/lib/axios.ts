import axios from "axios";

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

export const blogClient = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

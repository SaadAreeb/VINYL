import axios from "axios";

const api = axios.create({
  baseURL: "https://vinyl-r263.onrender.com/api",
  withCredentials: true,
});

export default api;


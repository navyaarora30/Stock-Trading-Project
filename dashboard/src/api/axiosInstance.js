import axios from "axios";

const api = axios.create({
  baseURL: "https://stock-trading-project-backend.onrender.com",
});

export default api;

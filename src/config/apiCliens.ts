import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000", // Backend alap URL
  timeout: 10000, // Időtúllépés (opcionális)
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
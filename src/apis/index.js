import axios from "axios";

export const BASE = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 800000,
  headers: {
    "Content-Type": "application/json"
  }
});

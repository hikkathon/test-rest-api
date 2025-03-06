import axios from "axios"

const API_URL = "http://localhost:5000/api/v1/users";

export const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
})

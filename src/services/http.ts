import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://brunoplay-v2.duckdns.org/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default http

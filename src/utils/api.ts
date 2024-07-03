import axios from 'axios'

const API_BASE_URL = 'https://simple-pexels-proxy.onrender.com'

export const api = axios.create({
  baseURL: API_BASE_URL,
})

export const handleApiError = (error: any): string => {
  if (error.response) {
    return `Error ${error.response.status}: ${error.response.data.message || 'An error occurred'}`
  } else if (error.request) {
    return 'No response received from the server'
  } else {
    return 'An error occurred while setting up the request'
  }
}

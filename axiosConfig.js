import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

api.defaults.headers.common['token'] = process.env.NEXT_PUBLIC_UUID_TOKEN
api.defaults.headers.common['Content-Type'] = 'application/json'

export default api

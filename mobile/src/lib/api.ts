import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.22.122.66:3333',
})

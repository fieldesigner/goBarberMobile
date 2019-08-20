import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.19:3333', // ipv4 do wifi
});

export default api;

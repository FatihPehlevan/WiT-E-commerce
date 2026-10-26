import axios from 'axios';

const api = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

export const getRoles = () =>
  api.get('/roles').then((response) => response.data);

export const signup = (payload) =>
  api.post('/signup', payload).then((response) => response.data);

export default api;

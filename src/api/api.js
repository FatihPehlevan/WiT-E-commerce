import axios from 'axios';

const api = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

export const getRoles = () =>
  api.get('/roles').then((response) => response.data);

export const signup = (payload) =>
  api.post('/signup', payload).then((response) => response.data);

export const login = (payload) =>
  api.post('/login', payload).then((response) => response.data);

export const verify = (token) =>
  api
    .get('/verify', { headers: { Authorization: token } })
    .then((res) => res.data);

export const getCategories = () =>
  api.get('/categories').then((res) => res.data);

export const getProducts = (categoryId, sort, filter, limit, offset) =>
  api
    .get('/products', {
      params: { category: categoryId, sort, filter, limit, offset },
    })
    .then((res) => res.data);

export default api;

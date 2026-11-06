import axios from 'axios';

const api = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

export const setAuthToken = (token) => {
  if (token) api.defaults.headers.common['Authorization'] = token;
  else delete api.defaults.headers.common['Authorization'];
};

// GET requests

export const getRoles = () =>
  api.get('/roles').then((response) => response.data);

export const verify = (token) => api.get('/verify').then((res) => res.data);

export const getCategories = () =>
  api.get('/categories').then((res) => res.data);

export const getProducts = (categoryId, sort, filter, limit, offset) =>
  api
    .get('/products', {
      params: { category: categoryId, sort, filter, limit, offset },
    })
    .then((res) => res.data);

export const getProduct = (productId) =>
  api.get(`/products/${productId}`).then((res) => res.data);

export const getAddresses = () =>
  api.get('/user/address').then((res) => res.data);

export const getCards = () => api.get('/user/card').then((res) => res.data);

// POST requests

export const signup = (payload) =>
  api.post('/signup', payload).then((response) => response.data);

export const login = (payload) =>
  api.post('/login', payload).then((response) => response.data);

export const saveAddress = (payload) =>
  api.post('/user/address', payload).then((res) => res.data);

export const saveCard = (payload) =>
  api.post('/user/card', payload).then((res) => res.data);

// PUT requests

export const updateAddress = (payload) =>
  api.put('/user/address', payload).then((res) => res.data);

export const updateCard = (payload) =>
  api.put('/user/card', payload).then((res) => res.data);

//DELETE requests

export const deleteAddress = (id) =>
  api.delete(`/user/address/${id}`).then((res) => res.data);

export const deleteCard = (id) =>
  api.delete(`/user/card/${id}`).then((res) => res.data);

export default api;

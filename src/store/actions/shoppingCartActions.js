export const SET_CART = 'SET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';
export const CHANGE_IS_CHECKED = 'CHANGE_IS_CHECKED';
export const CHANGE_COUNT = 'CHANGE_COUNT';
export const EMPTY_CART = 'EMPTY_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});
export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});
export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const changeIsChecked = (id) => ({
  type: CHANGE_IS_CHECKED,
  payload: id,
});

export const changeCount = (id, count) => ({
  type: CHANGE_COUNT,
  payload: { id, count },
});

export const emptyCart = () => ({
  type: 'EMPTY_CART',
});

export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});

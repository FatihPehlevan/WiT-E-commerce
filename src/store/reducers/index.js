import { combineReducers } from 'redux';
import clientReducer from './clientReducer.js';
import productReducer from './productReducer.js';
import shoppingCartReducer from './shoppingCartReducer.js';

const reducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  cart: shoppingCartReducer,
});

export default reducer;

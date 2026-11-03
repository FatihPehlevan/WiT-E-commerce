import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
  ADD_TO_CART,
  CHANGE_IS_CHECKED,
} from '../actions/shoppingCartActions';

const initialState = {
  cart: [],
  payment: {},
  address: {},
  total: 0,
};

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    case CHANGE_IS_CHECKED:
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.product.id === action.payload
            ? { ...cartItem, checked: !cartItem.checked }
            : cartItem,
        ),
      };

    case ADD_TO_CART: {
      const product = action.payload;
      const alreadyInCart = state.cart.find(
        (item) => item.product.id === product.id,
      );

      if (alreadyInCart) {
        return {
          ...state,
          total: state.total + product.price,
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, count: item.count + 1 }
              : item,
          ),
        };
      }

      return {
        ...state,
        total: state.total + product.price,
        cart: [...state.cart, { count: 1, checked: true, product: product }],
      };
    }

    default:
      return state;
  }
}

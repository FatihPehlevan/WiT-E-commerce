import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
  ADD_TO_CART,
  CHANGE_IS_CHECKED,
  CHANGE_COUNT,
  EMPTY_CART,
  REMOVE_FROM_CART,
} from '../actions/shoppingCartActions';

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    case EMPTY_CART:
      return { ...state, cart: [] };

    case CHANGE_IS_CHECKED:
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.product.id === action.payload
            ? { ...cartItem, checked: !cartItem.checked }
            : cartItem,
        ),
      };

    case CHANGE_COUNT: {
      const matchedItemCount = state.cart.find(
        (cartItem) => cartItem.product.id === action.payload.id,
      ).count;

      if (matchedItemCount === 1 && action.payload.count === -1) {
        return {
          ...state,
          cart: state.cart.filter(
            (item) => item.product.id !== action.payload.id,
          ),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, count: item.count + action.payload.count }
              : item,
          ),
        };
      }
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };

    case ADD_TO_CART: {
      const product = action.payload;
      const alreadyInCart = state.cart.find(
        (item) => item.product.id === product.id,
      );

      if (alreadyInCart) {
        const newCart = state.cart.map((item) =>
          item.product.id === product.id
            ? { ...item, count: item.count + 1 }
            : item,
        );
        return {
          ...state,
          cart: newCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { count: 1, checked: true, product: product }],
        };
      }
    }

    default:
      return state;
  }
}

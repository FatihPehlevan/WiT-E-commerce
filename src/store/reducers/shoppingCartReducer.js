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
    case EMPTY_CART:
      return { ...state, cart: [], total: 0 };

    case CHANGE_IS_CHECKED: {
      const matchedItem = state.cart.find(
        (cartItem) => cartItem.product.id === action.payload,
      );
      const matchedItemPrice = matchedItem.product.price;
      const matchedItemChecked = matchedItem.checked;
      return {
        ...state,
        total: matchedItemChecked
          ? state.total - matchedItem.count * matchedItemPrice
          : state.total + matchedItem.count * matchedItemPrice,
        cart: state.cart.map((cartItem) =>
          cartItem.product.id === action.payload
            ? {
                ...cartItem,
                checked: !cartItem.checked,
              }
            : cartItem,
        ),
      };
    }
    case CHANGE_COUNT: {
      const matchedItem = state.cart.find(
        (cartItem) => cartItem.product.id === action.payload.id,
      );
      const matchedItemCount = matchedItem.count;
      const isChecked = matchedItem.checked;
      return {
        ...state,
        cart:
          matchedItemCount === 1 && action.payload.count === -1
            ? state.cart.filter((item) => item.product.id !== action.payload.id)
            : state.cart.map((cartItem) =>
                cartItem.product.id === action.payload.id
                  ? {
                      ...cartItem,
                      count: cartItem.count + action.payload.count,
                    }
                  : cartItem,
              ),
        total: isChecked
          ? state.total + matchedItem.product.price * action.payload.count
          : state.total,
      };
    }
    case REMOVE_FROM_CART: {
      const matchedItem = state.cart.find(
        (cartItem) => cartItem.product.id === action.payload,
      );
      const isChecked = matchedItem.checked;
      return {
        ...state,
        total: isChecked
          ? state.total - matchedItem.product.price * matchedItem.count
          : state.total,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    }

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

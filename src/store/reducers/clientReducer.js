import {
  SET_USER,
  SET_THEME,
  SET_LANGUAGE,
  SET_ROLES,
  TOGGLE_FAVORITE,
  LOGOUT,
} from '../actions/clientActions.js';

const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  favorites: [],
  theme: '',
  language: '',
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case LOGOUT:
      return { ...state, user: {}, favorites: [] };
    case TOGGLE_FAVORITE: {
      const isFavorite = state.favorites.some(
        (product) => product.id === action.payload.id,
      );
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter(
              (product) => product.id !== action.payload.id,
            )
          : [...state.favorites, action.payload],
      };
    }
    default:
      return state;
  }
};
export default clientReducer;

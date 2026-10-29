import {
  CATEGORIES_REQ_START,
  CATEGORIES_REQ_SUCCESS,
  CATEGORIES_REQ_ERROR,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_PRODUCTS_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
  FETCH_STATES,
} from '../actions/productActions';

const initialState = {
  categories: [],
  categoriesFetchState: FETCH_STATES.NOT_FETCHED,
  categoriesError: null,
  productList: [],
  productsFetchState: FETCH_STATES.NOT_FETCHED,
  total: 0,
  limit: 25,
  offset: 0,
  filter: '',
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_REQ_START:
      return {
        ...state,
        categoriesFetchState: FETCH_STATES.FETCHING,
        categoriesError: null,
      };
    case CATEGORIES_REQ_SUCCESS:
      return {
        ...state,
        categoriesFetchState: FETCH_STATES.FETCHED,
        categories: action.payload,
      };
    case CATEGORIES_REQ_ERROR:
      return {
        ...state,
        categoriesFetchState: FETCH_STATES.FAILED,
        categoriesError: action.payload,
      };
    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SET_LIMIT:
      return { ...state, limit: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_PRODUCTS_FETCH_STATE:
      return { ...state, productsFetchState: action.payload };
    default:
      return state;
  }
}

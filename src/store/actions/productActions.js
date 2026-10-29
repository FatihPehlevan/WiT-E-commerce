import { getCategories } from '@/api/api';
export const CATEGORIES_REQ_START = 'CATEGORIES_REQ_START';
export const CATEGORIES_REQ_SUCCESS = 'CATEGORIES_REQ_SUCCESS';
export const CATEGORIES_REQ_ERROR = 'CATEGORIES_REQ_ERROR';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_PRODUCTS_FETCH_STATE = 'SET_PRODUCTS_FETCH_STATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';

export const FETCH_STATES = {
  NOT_FETCHED: 'NOT_FETCHED',
  FETCHING: 'FETCHING',
  FETCHED: 'FETCHED',
  FAILED: 'FAILED',
};

export const categoriesReqStart = () => ({
  type: CATEGORIES_REQ_START,
});

export const categoriesReqSuccess = (categories) => ({
  type: CATEGORIES_REQ_SUCCESS,
  payload: categories,
});

export const categoriesReqError = (error) => ({
  type: CATEGORIES_REQ_ERROR,
  payload: error,
});

export const setProductList = (list) => ({
  type: SET_PRODUCT_LIST,
  payload: list,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});
export const setProductsFetchState = (fetchState) => ({
  type: SET_PRODUCTS_FETCH_STATE,
  payload: fetchState,
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});
export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const fetchCategories = () => (dispatch) => {
  dispatch(categoriesReqStart());
  getCategories()
    .then((res) => dispatch(categoriesReqSuccess(res)))
    .catch((err) => dispatch(categoriesReqError(err.message)));
};

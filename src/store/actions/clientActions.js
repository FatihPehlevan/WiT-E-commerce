import { getRoles } from '@/api/api';

export const SET_USER = 'SET_USER';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_ROLES = 'SET_ROLES';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const CLEAR_FAVORITES = 'CLEAR_FAVORITES';

export const clearFavorites = () => ({
  type: CLEAR_FAVORITES,
});

export const toggleFavorite = (product) => ({
  type: TOGGLE_FAVORITE,
  payload: product,
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setLanguage = (lang) => ({
  type: SET_LANGUAGE,
  payload: lang,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const fetchRoles = () => (dispatch, getState) => {
  if (getState().client.roles.length > 0) return Promise.resolve();
  return getRoles().then((roles) => dispatch(setRoles(roles)));
};

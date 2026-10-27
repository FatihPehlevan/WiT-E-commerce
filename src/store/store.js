import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { logger } from 'redux-logger';
import reducer from './reducers/index.js';

export const myStore = createStore(reducer, applyMiddleware(thunk, logger));

/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'datalayer/reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import promiseMiddleware from './promiseMiddleware';

const enhancers = [];
const middlewares = [
  thunkMiddleware,
  promiseMiddleware,
];

const composedEnhancer = composeWithDevTools(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const initStore = () => createStore(
  rootReducer,
  {},
  composedEnhancer,
);

const store = initStore();

export default store;

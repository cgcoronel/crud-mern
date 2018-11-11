import React from 'react';
import reducers from './redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const storageState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const store = createStore(reducers,storageState, applyMiddleware(promise(), reduxThunk, logger));

export default store;

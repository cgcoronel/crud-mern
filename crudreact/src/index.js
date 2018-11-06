import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reducers from './redux/reducers';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {Provider} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers,{}, applyMiddleware(promise(), reduxThunk, logger));

ReactDOM.render(
		<Provider store={store}>
				<App />
		</Provider>
	, document.getElementById('root'));

registerServiceWorker();

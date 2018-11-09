import {combineReducers} from 'redux';

import items from './ItemsReducer';
import itemsCart from './ItemsCartReducer';

export default combineReducers({
	items,
	itemsCart
})

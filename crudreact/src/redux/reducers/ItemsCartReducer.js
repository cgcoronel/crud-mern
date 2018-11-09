import type from '../actions/type';

const initialState = {
	itemsCart: []
}

export default (state=initialState, action)=>{
		switch (action.type) {
			case type.GET_ITEMS_CART:
					return state
			case type.DELETE_ITEM_CART:
					return {
						...state,
						itemsCart: state.itemsCart.filter(item => item._id !== action.payload)
					}
					return state
			case type.ADD_ITEM_CART:
					return {
						...state,
						itemsCart: [...state.itemsCart, action.payload]
					}
			default:
					return state
		}
}

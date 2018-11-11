import type from '../actions/type';

const initialState = {
	items: [],
	searchItems: [],
	searchFilter: ''
}

export default (state=initialState, action)=>{
		switch (action.type) {
			case type.GET_ITEMS_FULFILLED:
					const {items} = action.payload.data;
					return Object.assign({}, state, {items})
			case type.DELETE_ITEM_FULFILLED:
					const {_id} = action.payload.data.item;
					return {
						...state,
						items: state.items.filter(item => item._id !== _id)
					}
			case type.EDIT_ITEM_FULFILLED:
					return {
							...state,
							items: state.items.map(
								item => item._id === action.payload.data.item._id
								? (item = action.payload.data.item) : item
							)
						}
			case type.ADD_ITEM_FULFILLED:
					return {
						...state,
						items: [...state.items, action.payload]
					}
			case type.SEARCH_ITEMS:
					const res = [...state.items];

					let searchItems = (action.payload !== '') ?
						res.filter(item => (
							item.title.toLowerCase().indexOf( action.payload.toLowerCase() ) !== -1
						))
						: res;

					return {
						...state,
						searchItems: searchItems,
						searchFilter: action.payload
					}

			default:
					return state
		}
}

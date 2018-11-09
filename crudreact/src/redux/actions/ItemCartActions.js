
import type from './type';

export const getItemsCart = () => {
	return {
		type: type.GET_ITEMS_CART
	}
}

export const addItemCart = (item) => {
	return {
		type: type.ADD_ITEM_CART,
		payload: item
	}
}

export const deleteItemCart = (id) => {
	return {
		type: type.DELETE_ITEM_CART,
		payload: id
	}
}

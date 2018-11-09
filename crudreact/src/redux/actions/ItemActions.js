import API from '../../components/api';

import type from './type';

export const getItems = () => dispatch => {
	dispatch({
		type: type.GET_ITEMS,
		payload: API.get('/items')
	})
}

export const deleteItem = (id) => dispatch => {
	dispatch({
		type: type.DELETE_ITEM,
		payload: API.delete(`/item/${id}`)
	})
}

export const editItem = (formData) => dispatch => {
	const id = formData.get('_id');

	dispatch({
		type: type.EDIT_ITEM,
		payload: API.put(`/item/${id}`, formData)
	})
}

export const addItem = (formData) => dispatch => {
	dispatch({
		type: type.ADD_ITEM,
		payload: API.post(`/item`, formData)
	})
}

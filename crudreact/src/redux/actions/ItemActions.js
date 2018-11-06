import axios from 'axios';
import API from '../../components/api';


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


editItem = (formData) => {
	const _id = formData.get('_id');

	API.put(`/item/${_id}`, formData)
		.then(res => {
			if (res.status===200){
				swal(
				 'Item Actualizado',
				 'Se guardó correctamente',
				 'success'
				);

				let id = res.data.item._id;
				const items = [...this.state.items]
				const itemEdit = items.findIndex(item => id === item._id)

				items[itemEdit] = res.data.item;
				this.setState({items});
			} else {
				swal(
				 'Atención',
				 'Hubo un error al guardar, intente nuevamente',
				 'warning'
				);
			}
		});
}

import React from 'react';
import swal from 'sweetalert2';

import API from './api';
const Context = React.createContext();

export { Context };

class Provider extends React.Component {
	state =  {
		items: [],
		result: [],
		cart: [],
		searchFilter: '',
		page: 1,
	}

	componentDidMount(){
		this.getItems();
	}

	getItems = () => {
		API.get('/items')
			.then(res => {
					this.setState({
						items: res.data.items
					});
			})
	}

	searchItems = (search) => {
	  if(search.length > 3) {
			this.setState({
				searchFilter: search
			});
		} else {
			this.setState({
				searchFilter: ''
			});
		}
	}

	deleteItem = (id) => {
		API.delete(`/item/${id}`)
			.then(res => {
				if (res.status === 200) {
					swal(
					 'Item Borrado',
					 'Se borró correctamente',
					 'success'
					);
					let resultado = this.state.items.filter(item => (
						item._id !== id
					))

					this.setState({
						items: resultado
					})
				} else {

				}
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
					this.setState({ items });
				} else {
					swal(
					 'Atención',
					 'Hubo un error al guardar, intente nuevamente',
					 'warning'
					);
				}
			});
	}

	addItem = (formData) => {
		API.post(`/item`, formData)
			.then(
				res => {
				 if (res.status === 200) {
					 swal(
						'Item Creado',
						'Se creó correctamente',
						'success'
					 );
					 let id = { id: res.data.item._id };
					 const newItem = Object.assign({}, res.data.item, id);

					 this.setState(prevState => (
						{ items: [...prevState.items, newItem]}
					 ))
				 }
				}
			);
	}

	addCart = (id) => {
		const items = [...this.state.items];
		const item = items.findIndex(item => id === item._id);

		this.setState({
			cart: [...this.state.cart, items[item]]
		});
	}

	deleteCart = (id) => {
		console.log(id);
		const cart = [...this.state.cart];

		this.setState({
			cart: cart.filter(item => id !== item._id)
		});
	}

	searchItems = (searchFilter) => {

			const items = [...this.state.items];
			let result = [];

			if (searchFilter !== '') {
				result = items.filter(item => (
					item.title.toLowerCase().indexOf( searchFilter.toLowerCase() ) !== -1
				));

			} else {
				result = items;
			}

			this.setState({ result, searchFilter });
	}


	render () {
		return (
			<Context.Provider value={{
					state: this.state,
					searchItems: this.searchItems,
					deleteItem: this.deleteItem,
					addCart: this.addCart,
					addItem: this.addItem,
					editItem: this.editItems,
					deleteCart: this.deleteCart,
					searchItems: this.searchItems
				}}>
					{this.props.children}
			</Context.Provider>
		)
	}
}

export default Provider;

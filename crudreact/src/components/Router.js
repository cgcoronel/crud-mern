import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import swal from 'sweetalert2';

import API from './api';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Footer from './Footer';
import Items from './Item/Items';
import SingleItem from './Item/SingleItem';
import ItemForm from './Item/ItemForm';
import Edit from './Item/Edit';
import Error from './Error';

class Router extends React.Component {

	state = {
		items: [],
		searchFilter: '',
		page: 1,
	}

	pagePrev = () => {
		let page = this.state.page;
				
		if (page > 1)  page--;
		this.setState({ page });

		console.log(this.state.page);
	}

	pageNext = () => {
		let page = this.state.page;		
		
		page++;
		this.setState({ page });	
		console.log(this.state.page);
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
	render() {

		let items = [...this.state.items];
		let search = this.state.searchFilter;
		let result;

		if (search !== '') {
			result = items.filter(item => (
				item.title.toLowerCase().indexOf( search.toLowerCase() ) !== -1
			));
		} else {
			result = items;
		}

		return (
			<BrowserRouter>
				<div className='container'>
					<div className='row justify-content-center'>
						<Header />
						<Navigation />
						<Switch>
							<Route exact path='/' render={() => {
											return (
													<Items
															items={result}
															deleteItem={this.deleteItem}
															searchItems={this.searchItems}
														/>
											)
									}}/>
								<Route exact path='/item/:id' render={(props) => {
										 	let id = props.match.params.id;

											const items = this.state.items;


											let filtro;
											filtro = items.filter(item => (
													item._id === id
											));


											return (
												<SingleItem
														item={filtro[0]}
													/>
											)
									}}/>

								<Route exact path='/add' render={() => {
											return (
												<ItemForm
														addItem={this.addItem}
													/>
											)
								}}/>

							<Route exact path='/edit/:id' render={(props) => {
											 	let id = props.match.params.id;

												const items = this.state.items;
												let filtro;
												filtro = items.filter(item => (
														item._id === id
												));

												return (
													<Edit
															item={filtro[0]}
															editItem={this.editItem}
														/>
												)
										}}/>
								<Route component={Error} />
						</Switch>						
					</div>

					<Footer
								pagePrev={this.pagePrev}
            					pageNext={this.pageNext}
							/>
				</div>
			</BrowserRouter>
		)
	}
}

export default Router;

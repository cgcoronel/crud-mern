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

import {Context} from './Provider';

class Router extends React.Component {

	state = {
		items: [],
		cart: [],
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
							<Context.Consumer>
									{
										(value) => (
											<Switch>

														<Route exact path='/' component={Items}/>

														<Route exact path='/item/:id' render={(props) => {
																	 	let id = props.match.params.id;

																		const items = value.state.items;

																		let filtro;
																		filtro = items.filter(item => (
																				item._id === id
																		));

																		console.log(filtro);

																		return (
																			<SingleItem
																					item={filtro[0]}
																				/>
																		)
																}}/>

														<Route exact path='/add' component={ItemForm}/>

														<Route exact path='/edit/:id' render={(props) => {
																		 	let id = props.match.params.id;

																			const items = value.state.items;
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
							)
						}
							</Context.Consumer>
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

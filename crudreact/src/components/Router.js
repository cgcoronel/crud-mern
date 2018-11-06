import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer';
import SingleItem from './Item/SingleItem';
import ItemForm from './Item/ItemForm';
import Edit from './Item/Edit';
import List from './List';
import Error from './Error';


import {Context} from './Provider';

class Router extends React.Component {
/*
	state = {
		page: 1
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
*/


	render() {

		return (
			<BrowserRouter>
				<div className='container'>
					<div className='row justify-content-center'>
							<Context.Consumer>
									{
										(value) => {
										return (

											<React.Fragment>
													<Header
															cart={value.state.cart}
															deleteCart={value.deleteCart}
														/>
													<br/><br/><br/><br/>
													<Switch>

																<Route exact path='/' component={List}/>

																<Route exact path='/item/:id' render={(props) => {
																			 	let id = props.match.params.id;
																				const items = value.state.items;
																				let filtro = items.filter(item => ( item._id === id ));

																				return (
																					<SingleItem item={filtro[0]} />
																				)
																		}}/>

																<Route exact path='/add' component={ItemForm}/>

																<Route exact path='/edit/:id' render={(props) => {
																				 	let id = props.match.params.id;

																					const items = value.state.items;
																					let filtro;
																					filtro = items.filter(item => ( item._id === id ));

																					return (
																						<Edit
																								item={filtro[0]}
																								editItem={value.editItem}
																							/>
																					)
																			}}/>
																	<Route component={Error} />

																</Switch>
															</React.Fragment>
														)
							}
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

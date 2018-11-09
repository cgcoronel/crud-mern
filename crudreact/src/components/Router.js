import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer';
import SingleItem from './Item/SingleItem';
import ItemForm from './Item/ItemForm';
import Edit from './Item/Edit';
import List from './List';
import Error from './Error';

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
						<Header/>
						<Switch>
									<Route exact path='/'         component={List} />
									<Route exact path='/item/:id' component={SingleItem} />
									<Route exact path='/add'      component={ItemForm} />
									<Route exact path='/edit/:id' component={Edit} />
									<Route                        component={Error} />
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

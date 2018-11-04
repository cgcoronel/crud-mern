import React from 'react';
import Item from './Item/Item';
import {Context} from './Provider';

class List extends React.Component {

	showItems = (value) => {

			const {items, result, searchFilter} = value.state;

			if (items.length === 0) return null;

			const res = (searchFilter !== '') ? [...result] : [...items];

			return (
				<React.Fragment>
					{
						Object.keys(res).map(
						item => (
						<Item
								key={item}
								info={res[item]}
								deleteItem={value.deleteItem}
								addCart={value.addCart}
								/>
						)
					)}
				</React.Fragment>
			)
	}

	render () {
		return (
			<Context.Consumer>
				{
					(value) => {
						return (
							<div className='col-12'>
								<div className="row">
									{this.showItems(value)}
								</div>
							</div>
						)
					}
				}
			</Context.Consumer>
		)
	}
}

export default List;

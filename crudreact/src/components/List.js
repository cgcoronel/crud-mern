import React from 'react';
import Item from './Item/Item';
import {Context} from './Provider';

class List extends React.Component {

	showItems = (value) => {		
			const {items} = value.state;
			if (items.length === 0) return null;

			return (
				<React.Fragment>
					{
						Object.keys(items).map(
						item => (
						<Item
								key={item}
								info={items[item]}
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
					(value) => (
						<div className="row">
							{this.showItems(value)}
						</div>
					)
				}
			</Context.Consumer>
		)
	}
}

export default List;

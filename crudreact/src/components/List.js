import React from 'react';
import Item from './Item/Item';
import {getItems, deleteItem} from '../redux/actions/ItemActions';
import {getItemsCart, addItemCart} from '../redux/actions/ItemCartActions';

import {connect} from 'react-redux';
import store from '../store';

store.subscribe( () => {
		localStorage.setItem('cart', JSON.stringify(store.getState()));
});

class List extends React.Component {

	componentDidMount(){
			this.props.getItems();
			this.props.getItemsCart();
	}

	showItems = () => {
		const {items, searchItems, searchFilter} = this.props.items;

		if (!items) return null;

		const itemsActive = (searchFilter !== '') ? [...searchItems] : [...items];

		return (
				Object.keys(itemsActive).map(
						item => (
						<Item
								key={item}
								info={itemsActive[item]}
								deleteItem={this.props.deleteItem}
								addItemCart={this.props.addItemCart}
								/>
						)
			)
		)
	}

	render () {
		return (
			<div className='col-12'>
				<div className="row">
					{this.showItems()}
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ items, itemsCart }) => {
	return {
		items,
		itemsCart
	}
}

export default connect(mapStateToProps, {
	getItems,
	deleteItem,
	getItemsCart,
	addItemCart
})(List);

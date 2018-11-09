import React from 'react';
import Item from './Item/Item';
import {getItems, deleteItem} from '../redux/actions/ItemActions';
import {getItemsCart, addItemCart} from '../redux/actions/ItemCartActions';

import {connect} from 'react-redux';

class List extends React.Component {

	componentDidMount(){
			this.props.getItems();
			this.props.getItemsCart();
	}

	showItems = () => {
		//const {items, result, searchFilter} = this.props.items;
		const {items} = this.props.items;

		if (!items) return null;

		//const res = (searchFilter !== '') ? [...result] : [...items];
		const itemsActive = [...items];

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

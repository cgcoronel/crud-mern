import React from 'react';
import Item from './Item/Item';

class List extends React.Component {

	showItems = () => {
			const items = this.props.items;

			if (items.length === 0) return null;				

			return (				
				<React.Fragment>					
					{Object.keys(items).map(
						item => (
							<Item
								key={item}
								info={this.props.items[item]}
								deleteItem={this.props.deleteItem}
								/>
						)
					)}
				</React.Fragment>
			)
	}

	render () {
		return (
			<div className="row">
				{this.showItems()}
			</div>												
		)
	}
}

export default List;


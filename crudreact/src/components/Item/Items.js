import React from 'react';
import List from '../List';
import Finder from '../Finder/Finder';

class Items extends React.Component {

	render () {
		return (
			<div className='col-12 col-md-8'>
						<h2 className='text-center'>Items</h2>

						<Finder
							searchItems={this.props.searchItems}
						/>

						<List
								items={this.props.items}
								deleteItem={this.props.deleteItem}
							/>

			</div>
		)
	}
}

export default Items;

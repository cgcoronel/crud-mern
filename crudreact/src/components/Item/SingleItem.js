import React from 'react';
import {connect} from 'react-redux';
import { URL } from '../api';
import './SingleItem.css';
import { Link } from 'react-router-dom';

class SingleItem extends React.Component {

	showItem = (item) => {
		if (!item) return null;

		const {title, description, valor, image} = item;

		return (
			<React.Fragment>
				<div className='container-singleitem row'>
					<div className="col-lg">
						 <div className="card">
								 <img className="card-img-top" src={`${URL}image/${image}`} alt={title} />
							</div>
					 </div>
					 <div className="col-lg">
	 					 <div className="card">
	 							 <div className="card-body">
	 									 <h2 className="card-title">{title}</h2>
	 									 <h3 className="card-text">$ {valor}.-</h3>
										 <p>{description}</p>
	 							 </div>
	 						 </div>
	 				 </div>
				</div>
				<div className='container-singleitem row float-right'>
					<Link to={`/`} className='btn btn-primary btn-md mt-3'>Volver</Link>
				</div>
			</React.Fragment>
		)
	}
	render () {
		let id = this.props.match.params.id;
		const {items} = this.props.items;
		let item = items.filter(item => ( item._id === id ));

		return (
			<div className='col-12 col-md-8'>
				{this.showItem(item[0])}
			</div>
		)
	}
}

const mapStateToProps = ({ items }) => ({ items })

export default connect(mapStateToProps, {})(SingleItem);

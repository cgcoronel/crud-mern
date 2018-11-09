import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { URL } from './api';
import {getItemsCart, deleteItemCart} from '../redux/actions/ItemCartActions';

class Cart extends React.Component {

	render() {
		let total = 0;

		const {itemsCart} = this.props.itemsCart;

			return (
					<React.Fragment>

					<div className="modal fade" id="cartModal" role="dialog" aria-labelledby="cartModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="cartModalLabel">Productos</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							{
								Object.keys(itemsCart).map(item => {
									const {_id, title, valor, image} = itemsCart[item];
									total += Number(valor);

										return (
											<li key={item} className='list-group-item'>
												<div className='row justify-content-between align-items-center'>
													<div className='col-md-8 d-flex justify-content-between align-items-center'>
														<Link to={`/item/${_id}`} >
															<img className="w-50 p-0" src={`${URL}image/${image}`} alt="item" />
														</Link>
														<p className='text-dark m-0'>{title}</p>
														<span className='badge badge-warning text-dark'>$ {valor}.-</span>
													</div>

													<div className='col-md-4 d-flex justify-content-end acciones'>
														<button onClick={()=>{
																this.props.deleteItemCart(_id);
															}} type='button' className='btn btn-danger'>x</button>
													</div>
												</div>
											</li>
										)
								})
							}
							{this.props.setCartCount(itemsCart.length)}
						</div>
						<div className="modal-footer">
							<h2><span className='badge badge-info text-dark'>Total: {total}.- </span></h2>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
							<button type="button" className="btn btn-primary">Concretar compra</button>
						</div>
					</div>
					</div>
					</div>

					</React.Fragment>

			)
		}
}



const mapStateToProps = ({ itemsCart }) => {
	return {
		itemsCart
	}
}

export default connect(mapStateToProps, {
	getItemsCart,
	deleteItemCart
})(Cart);

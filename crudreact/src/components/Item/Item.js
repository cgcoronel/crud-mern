import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';
import { URL } from '../api';
import './Item.css';

class Item extends React.Component {

	deleteConfirm = () => {
		const {_id} = this.props.info;
		swal({
			title: 'Estas seguro?',
			text: 'Esta acción no se puede deshacer!',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, borrar!',
			cancelButtonText: 'Cancelar'
		}).then(
			(result) => {
				if (result.value) {
					this.props.deleteItem(_id);
					swal(
						'Eliminado!',
						'El item ha sido eliminado.',
						'success'
					)
				}
			}
		)
	}

	addCart = () => {
		const {_id} = this.props.info;
		swal({
			title: 'Agregar producto al carrito?',
			text: 'Esta acción no se puede deshacer!',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si!',
			cancelButtonText: 'Cancelar'
		}).then(
			(result) => {
				if (result.value) {
					this.props.addCart(_id);
					swal(
						'Agregado!',
						'El producto fue agregado al carrito.',
						'success'
					)
				}
			}
		)
	}

	render () {

		const {_id, title, image, valor} = this.props.info;

		return (
			 <div className="container-item col-sm-4">
					<div className="card">
		    			<img className="card-img-top" src={`${URL}image/${image}`} alt="Card cap" />
		    			<div className="card-body">
		      				<h5 className="card-title">{title}</h5>
		      				<p className="card-text">$ {valor}.-</p>
		    			</div>
		    			<div className="card-footer">
		      				<Link to={`/item/${_id}`} className='btn btn-primary btn-sm'>Ver</Link>
		      				<Link to={`/edit/${_id}`} className='btn btn-success btn-sm'>Editar</Link>
									<button onClick={ this.deleteConfirm } type='button' className='btn btn-danger btn-sm'>Borrar</button>
									<button onClick={ this.addCart } type='button' className='btn btn-success btn-sm'>Comprar</button>
		    			</div>
		  			</div>
  			</div>
		)
	}
}

export default Item;

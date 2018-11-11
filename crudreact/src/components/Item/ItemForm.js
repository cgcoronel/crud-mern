import React from 'react';
import {connect} from 'react-redux';
import swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { URL } from '../api';
import {addItem} from '../../redux/actions/ItemActions';

class ItemForm extends React.Component {

	title = React.createRef();
	description = React.createRef();
	valor = React.createRef();
	image = React.createRef();

	state = {
		selectedFile: null
	}

	addItem = () => {
		const fd = new FormData();

		fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
		fd.append('title', this.title.current.value);
		fd.append('description', this.description.current.value);
		fd.append('valor', this.valor.current.value);

		this.props.addItem(fd);
		swal(
			'Guardado!',
			'El item ha sido guardado correctamente',
			'success'
		).then(
			result => {
				this.props.history.push('/')
			}
		);
	}

	fileSelectedHandler = event => {
		this.setState({
			selectedFile: event.target.files[0]
		});


	}

	render () {
		return (
					<form className='col-8'>
						<legend className='text-center'>Nuevo Item</legend>
						<div className='container-singleitem row'>
							<div className="col-lg">
								 <div className="card">
									 <img className="card-img-top" src={`${URL}image/vacio.jpg`} alt='vacio'/>
			  						 	<div className="custom-file mt-3">
			    							<input type="file" className="custom-file-input" onChange={this.fileSelectedHandler} id="inputGroupFile01" />
			    							<label className="custom-file-label" htmlFor="inputGroupFile01">Seleccione una Imagen</label>
			  							</div>
								 </div>
							 </div>
							 <div className="col-lg">
								 <div className="card">
										 <div className="card-body">
												 <h2 className="card-title">
													 <div className='form-group'>
														 <input type='text' ref={this.title} className='form-control' placeholder='Titulo' />
													 </div>
												 </h2>
												 <h3 className="card-text">
													 <div className='form-group'>
														 <input type='text' ref={this.valor} className='form-control' placeholder='$ Valor' />
													 </div>
												 </h3>
												 <div className='form-group'>
												 	 <textarea ref={this.description} className='form-control' rows='12' placeholder='Descripcion'></textarea>
												 </div>
										 </div>
									 </div>
							 </div>
						</div>
						<div className='container-singleitem row float-right'>
							<button type='button' onClick={this.addItem} className='btn btn-primary btn-md mt-3'>Add</button>
							&nbsp;<Link to={`/`} className='btn btn-warning btn-md mt-3'>Cancelar</Link>
						</div>
					</form>
				)
			}
}

const mapStateToProps = ({ items }) => ({items})

export default connect(mapStateToProps, { addItem })(ItemForm);

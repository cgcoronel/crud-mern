import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';
import { URL } from '../api';
import {editItem} from '../../redux/actions/ItemActions';

class Edit extends React.Component {

	title = React.createRef();
	description = React.createRef();
	valor = React.createRef();
	image = React.createRef();

	state = {
		selectedFile: null
	}

	editItem = () => {
		swal({
			title: 'Estas seguro?',
			text: 'Esta acción no se puede deshacer!',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, Guardar!',
			cancelButtonText: 'Cancelar'
		}).then(
			(result) => {
				if (result.value) {
					let id = this.props.match.params.id;
					const fd = new FormData();
					const file = this.state.selectedFile;

					if (file) {
						fd.append('image', file, file.name);
					} else {
						fd.append('image_name', this.image.current.value);
					}

					fd.append('title', this.title.current.value);
					fd.append('description', this.description.current.value);
					fd.append('valor', this.valor.current.value);
					fd.append('_id', id);

					this.props.editItem(fd);
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
			}
		)
	}

	fileSelectedHandler = event => {
		this.setState({
			selectedFile: event.target.files[0]
		});
	}

	showForm = () => {

		let id = this.props.match.params.id;
		const items = this.props.items.items;
		const item = items.filter(item => ( item._id === id ));

		if (!item[0]) return null;

		const {title, description, valor, image} = item[0];

		return (
			<form className='col-8'>
				<legend className='text-center'>Editar Item</legend>
				<div className='container-singleitem row'>
					<div className="col-lg">
						 <div className="card">
							 <img className="card-img-top" src={`${URL}image/${image}`} alt='vacio' />
									<div className="custom-file mt-3">
										<input type="file" className="custom-file-input" onChange={this.fileSelectedHandler} />
										<input type='hidden' ref={this.image} defaultValue={image}/>
										<label className="custom-file-label">Seleccione una Imagen</label>
									</div>
						 </div>
					 </div>
					 <div className="col-lg">
						 <div className="card">
								 <div className="card-body">
										 <h2 className="card-title">
											 <div className='form-group'>
												 <input type='text' ref={this.title} className='form-control' defaultValue={title} />
											 </div>
										 </h2>
										 <h3 className="card-text">
											 <div className='form-group'>
												 <input type='text' ref={this.valor} className='form-control' defaultValue={valor} />
											 </div>
										 </h3>
										 <div className='form-group'>
										 	<textarea ref={this.description} className='form-control' rows='12' defaultValue={description}></textarea>
										 </div>
								 </div>
							 </div>
					 </div>
				</div>
				<div className='container-singleitem row float-right'>
					<button type='button' onClick={this.editItem} className='btn btn-primary mt-3'>Save</button>
					&nbsp;<Link to={`/`} className='btn btn-warning btn-md mt-3'>Cancelar</Link>
				</div>
			</form>
		)
	}

	render () {
		return (
			<React.Fragment>
					{this.showForm()}
			</React.Fragment>
		)
	}
}


const mapStateToProps = ({ items }) => ({items})

export default connect(mapStateToProps, { editItem })(Edit);

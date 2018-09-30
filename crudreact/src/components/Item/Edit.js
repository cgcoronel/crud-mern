import React from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../api';

class Edit extends React.Component {

	title = React.createRef();
	description = React.createRef();
	valor = React.createRef();
	image = React.createRef();

	state = {
		selectedFile: null
	}

	editItem = (e) => {
		e.preventDefault();

		const fd = new FormData();

		const file = this.state.selectedFile;
		if (file != null) {
			fd.append('image', file, file.name);
		} else {
			fd.append('image_name', this.props.item.image);
		}

		fd.append('title', this.title.current.value);
		fd.append('description', this.description.current.value);
		fd.append('valor', this.valor.current.value);
		fd.append('_id', this.props.item._id);

		this.props.editItem(fd);
	}

	fileSelectedHandler = event => {
		this.setState({
			selectedFile: event.target.files[0]
		});
	}


	loadForm = () => {

		if (!this.props.item) {
			return null;
		}
		const {title, description, valor, image} = this.props.item;
		return (
			<form onSubmit={this.editItem} className='col-8'>
				<legend className='text-center'>Editar Item</legend>
				<div className='container-singleitem row'>
					<div className="col-lg">
						 <div className="card">
							 <img className="card-img-top" src={`${URL}image/${image}`} alt='vacio' />
									<div className="custom-file mt-3">
										<input type="file" className="custom-file-input" onChange={this.fileSelectedHandler} />
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
					<button type='submit' className='btn btn-primary mt-3'>Save</button>
					&nbsp;<Link to={`/`} className='btn btn-warning btn-md mt-3'>Cancelar</Link>
				</div>
			</form>
		)
	}

	render () {

		return (
			<React.Fragment>
					{this.loadForm()}
			</React.Fragment>

		)
	}
}

export default Edit;

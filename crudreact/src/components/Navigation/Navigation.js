import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => {
	return (		
			<nav className='col-12 cold-md-8'>
				<Link to={'/'}>Todos los Items</Link>				
				<Link to={'/add'}>Nuevo Item</Link>
			</nav>					
	)
}

export default Navigation

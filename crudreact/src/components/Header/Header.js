import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart';
import './Header.css';
import Finder from '../Finder/Finder';

const Header = ({cart, deleteCart}) => {
	return (
		<header className='col-12 col-md-12'>
			<Cart
					cart={cart}
					deleteCart={deleteCart}
				/>
			<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			  <a className="navbar-brand" href="#">NicoleZoe</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
							<Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
			      </li>

						<li className="nav-item active">
							<Link className="nav-link" to={'/add'}>Agregar Item</Link>
			      </li>

			    </ul>
			    <div className="form-inline my-2 my-lg-1">

						<Finder/>


			    </div>
			  </div>

				<a className="navbar-brand carrito" href="#" data-toggle="modal" data-target="#cartModal">
					<h6><span className='carrito-items badge badge-danger text-white'>{cart.length}</span></h6>
					<img className='carrito-icon' src='images/carrito.png'/>
				</a>


			</nav>

			<br/>
		</header>
	)
}

export default Header

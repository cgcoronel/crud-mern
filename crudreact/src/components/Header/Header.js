import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Finder from '../Finder/Finder';
import Cart from '../Cart';

class Header extends React.Component {

	state = {
 		cartCount: 0
	}

	setCartCount = cartCount =>{
		this.setState({cartCount});
	}

	render(){
		return (
			<header className='col-12 col-md-12'>
				<Cart
						setCartCount={this.setCartCount}
					/>

				<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
				  <a className="navbar-brand" href="">NicoleZoe</a>
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

					<a className="navbar-brand carrito" href="" data-toggle="modal" data-target="#cartModal">
						<h6><span className='carrito-items badge badge-danger text-white'>{this.state.cartCount}</span></h6>
						<img className='carrito-icon' src='images/carrito.png' alt='Carrito'/>
					</a>


				</nav>
			</header>
		)
	}
}

export default Header

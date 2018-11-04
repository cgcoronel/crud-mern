import React from 'react';

const Footer = (props) => {
	return (
			<React.Fragment>
				<hr/>

				<div className='row justify-content-center'>
						<button onClick={props.pagePrev} type='button' className='btn btn-info mr-1'>&larr; Anterior</button>
						<button onClick={props.pageNext} type='button' className='btn btn-info'>Siguiente &rarr;</button>
				</div>

    		<hr/>

				<footer className="page-footer font-small stylish-color-dark pt-4">
				    <div className="container text-center text-md-left">
				      <div className="row">
				        <div className="col-md-4 mx-auto">
				          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">CONTACTO</h5>
				          <p>(011) 1234 - 65432</p>
				        </div>
				        <hr className="clearfix w-100 d-md-none" />
				        <div className="col-md-2 mx-auto">
				          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

				          <ul className="list-unstyled">
				            <li>
				              		<a href="#!">Link 1</a>
				            </li>
				            <li>
				              		<a href="#!">Link 2</a>
				            </li>
				            <li>
				              		<a href="#!">Link 3</a>
				            </li>
				            <li>
				              		<a href="#!">Link 4</a>
				            </li>
				          </ul>

				        </div>
				        <hr className="clearfix w-100 d-md-none" />
				        <div className="col-md-2 mx-auto">
				          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
				          <ul className="list-unstyled">
				            <li>
				              		<a href="#!">Link 1</a>
				            </li>
				            <li>
				              		<a href="#!">Link 2</a>
				            </li>
				            <li>
				              		<a href="#!">Link 3</a>
				            </li>
				            <li>
				              		<a href="#!">Link 4</a>
				            </li>
				          </ul>

				        </div>


				        <hr className="clearfix w-100 d-md-none" />

				        <div className="col-md-2 mx-auto">
				          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
				          <ul className="list-unstyled">
				            <li>
				              		<a href="#!">Link 1</a>
				            </li>
				            <li>
				              		<a href="#!">Link 2</a>
				            </li>
				            <li>
				              		<a href="#!">Link 3</a>
				            </li>
				            <li>
				              		<a href="#!">Link 4</a>
				            </li>
				          </ul>

				        </div>
				      </div>
				    </div>

				    <hr />

				    <ul className="list-unstyled list-inline text-center py-2">
				      <li className="list-inline-item">
				        <h5 className="mb-1">Register for free</h5>
				      </li>
				      <li className="list-inline-item">
				        <a href="#!" className="btn btn-danger btn-rounded">Sign up!</a>
				      </li>
				    </ul>

				    <hr/>

				    <ul className="list-unstyled list-inline text-center">
				      <li className="list-inline-item">
				        <a className="btn-floating btn-fb mx-1">
				          <i className="fa fa-facebook"> </i>
				        </a>
				      </li>
				      <li className="list-inline-item">
				        <a className="btn-floating btn-tw mx-1">
				          <i className="fa fa-twitter"> </i>
				        </a>
				      </li>
				      <li className="list-inline-item">
				        <a className="btn-floating btn-gplus mx-1">
				          <i className="fa fa-google-plus"> </i>
				        </a>
				      </li>
				      <li className="list-inline-item">
				        <a className="btn-floating btn-li mx-1">
				          <i className="fa fa-linkedin"> </i>
				        </a>
				      </li>
				      <li className="list-inline-item">
				        <a className="btn-floating btn-dribbble mx-1">
				          <i className="fa fa-dribbble"> </i>
				        </a>
				      </li>
				    </ul>

				    <div className="footer-copyright text-center py-3">© 2018 Copyright:
				      <a href="http://kitool.com/">kitool.com</a>
				    </div>

				</footer>

			</React.Fragment>
	)
}

export default Footer

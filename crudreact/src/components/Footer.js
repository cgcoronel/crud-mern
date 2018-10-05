import React from 'react';

const Footer = (props) => {
	return (
		<div className='row justify-content-center'>		
				<button onClick={props.pagePrev} type='button' className='btn btn-info mr-1'>&larr; Anterior</button>
				<button onClick={props.pageNext} type='button' className='btn btn-info'>Siguiente &rarr;</button>					        		
		</div>	
	)
}

export default Footer

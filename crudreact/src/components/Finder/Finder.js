import React from 'react';
import './Finder.css';

import {Context} from '../Provider';

class Finder extends React.Component {

  render () {
    return (
      <Context.Consumer>
        {
          (value) => (
            <form className='finder'>
              <input type='text' placeholder='Búsqueda' onChange={()=>{
                  this.value.searchItems(this.target.value)
                }} />
            </form>
          )
        }
      </Context.Consumer>

    )
  }
}

export default Finder;

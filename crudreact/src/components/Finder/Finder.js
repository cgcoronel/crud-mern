import React from 'react';
import './Finder.css';

class Finder extends React.Component {

  find = (e) => {
    const search = e.target.value;
    this.props.searchItems(search);
  }

  render () {
    return (
        <form className='finder'>
          <input type='text' placeholder='Búsqueda' onChange={this.find} />
        </form>
    )
  }
}

export default Finder;

import React from 'react';

import {Context} from '../Provider';

class Finder extends React.Component {
  search = React.createRef();

  render () {
    return (
      <Context.Consumer>
        {
          (value) => (
              <input ref={this.search} className="form-control mr-sm-2" type="search" placeholder="Buscar..." aria-label="Buscar..."
                onChange={()=>{
                  value.searchItems(this.search.current.value)
                }} />
          )
        }
      </Context.Consumer>

    )
  }
}

export default Finder;

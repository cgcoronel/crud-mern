import React from 'react';
import {searchItems} from '../../redux/actions/ItemActions';

import {connect} from 'react-redux';

class Finder extends React.Component {
  search = React.createRef();

  render () {
    return (
        <input ref={this.search} className="form-control mr-sm-2" type="search" placeholder="Buscar..." aria-label="Buscar..."
          onChange={()=>{
            this.props.searchItems(this.search.current.value)
          }} />
    )
  }
}

const mapStateToProps = ({ items }) => ({items})

export default connect(mapStateToProps, { searchItems })(Finder);

import React, { Component } from 'react';
import Router from './components/Router';
import Provider from './components/Provider';

class App extends Component {
  render() {
    return (
      <Provider>
          <Router />
      </Provider>  
    );
  }
}

export default App;

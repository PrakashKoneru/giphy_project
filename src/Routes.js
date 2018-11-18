import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './main';
import Favorites from './components/favorites';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Main>
          <Route path="/favorities" component={Favorites}/>
        </Main>
      </Router>
    )
  }
}

export default Routes;
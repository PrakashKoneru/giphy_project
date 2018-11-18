import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import GiphySearch from './components/giphySearch';
import './App.css';

class Main extends Component {
  render() {
    const { children, history: { location: { pathname } } } = this.props;
    return (
      <Fragment>
        <div className="header">
          <Link to="/" className="gifyLogo">Gify Logo</Link>
          <div className="gifyTitle">The Ultimate gif</div>
          <Link to="/favorites" className="gifyFavorites">My Favorities</Link>
        </div>
        { pathname === '/' ? <GiphySearch /> : children }
      </Fragment>
    );
  }
}

export default withRouter(Main);

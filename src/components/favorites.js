import React, { Component } from 'react';
import { connect } from 'react-redux';
import GiphyList from './renderGiphyList';

class Favorites extends Component {
  render() {
    const { favorites } = this.props;
    return (
      <GiphyList list={favorites} />
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites
})

export default connect(mapStateToProps)(Favorites);

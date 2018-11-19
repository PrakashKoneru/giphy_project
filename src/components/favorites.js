import React, { Component } from 'react';
import { connect } from 'react-redux';
import GiphyList from './renderGiphyList';

class Favorites extends Component {
  render() {
    const { favorites } = this.props;
    return (
      <GiphyList list={favorites} filterFavs/>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.results.filter((gif) => gif.favorited)
})

export default connect(mapStateToProps)(Favorites);

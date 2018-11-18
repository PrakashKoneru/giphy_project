import React, { Component } from 'react';
import { connect } from 'react-redux';

class Favorites extends Component {
  render() {
    const { favorites } = this.props;
    return (
      <div>Coming up</div>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites
})

export default connect(mapStateToProps)(Favorites);

import React, { PureComponent } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import setGif from '../actions';

class GiphyList extends PureComponent {
  setGif = (selectedGif) => this.props.setGif(selectedGif)
  render() {
    const { list } = this.props;

    if (!list || list.length === 0) return null;
    return (
      <Grid container spacing={8}>
        {list.map((gif, index) => (
          <Grid onClick={this.setGif.bind(this, gif)} item xs={12} sm={3} className="gifCard" key={index}>
            <img src={gif.images.original.url} height={200} width="100%" alt="giphySearch"/>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default connect(null, { setGif })(GiphyList);
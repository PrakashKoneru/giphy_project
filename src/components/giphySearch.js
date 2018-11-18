import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';

class GiphySearch extends Component {
  state = {
    searchText: '',
    results: null
  }
  setInput = ({target: { value }}) => this.setState({ searchText: value });
  fetchData = () =>{
    axios
    .get(`https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=${this.state.searchText}`)
    .then(({ data: { data }}) => this.setState({ results: data }))
  }
  render() {
    const { searchText, results } = this.state;
    return (
      <Fragment>
        <div>
          <input
            type="text"
            placeholder="Enter Text"
            value={searchText}
            onChange={this.setInput}
          />
          <button onClick={this.fetchData}>Search</button>
        </div>
        <Grid container spacing={8}>
          {results && results.map((gif, index) => (
            <Grid item xs={12} sm={3} className="gifCard">
              <img src={gif.images.original.url} height={200} width="100%" alt="giphySearch"/>
            </Grid>
          ))}
        </Grid>
      </Fragment>
    );
  }
}

export default GiphySearch;
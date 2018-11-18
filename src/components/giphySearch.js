import React, { Component, Fragment } from 'react';
import axios from 'axios';
import GiphyList from './renderGiphyList';

class GiphySearch extends Component {
  state = {
    searchText: '',
    results: null
  }
  setInput = ({target: { value }}) => this.setState({ searchText: value });
  fetchData = () => {
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
        <GiphyList list={results} />
      </Fragment>
    );
  }
}

export default GiphySearch;
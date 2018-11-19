import React, { Component, Fragment } from 'react';
import GiphyList from './renderGiphyList';
import { fetchDataAction } from '../../src/action.creators';
import { connect } from 'react-redux';

class GiphySearch extends Component {
  state = {
    searchText: '',
  }
  setInput = ({target: { value }}) => this.setState({ searchText: value });
  fetchData = () => {
    this.props.fetchDataAction(this.state.searchText);
  }

  render() {
    const { searchText } = this.state;
    const { results } = this.props;
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

const mapStateToProps = (state) => ({
  results: state.results
})
export default connect(mapStateToProps, { fetchDataAction })(GiphySearch);
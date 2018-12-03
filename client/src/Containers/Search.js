import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setResults, setSearchInputValue } from '../actions';
import SearchBar from '../Components/SearchBar';

class Search extends PureComponent {
  render() {
    return (
      <SearchBar
        allMovies={this.props.allMovies}
        results={this.props.results}
        setSearchResults={this.props.setSearchResults}
        setSearchInputValue={this.props.setSearchInputValue}
        inputValue={this.props.inputValue}
        filterValues={this.props.filterValues}
        resultsFromFilter={this.props.resultsFromFilter}
      />
    );
  }
}

const mapStateToProps = state => ({
  allMovies: state.movies.allMovies,
  inputValue: state.movies.inputValue,
  results: state.movies.results,
  filterValues: state.movies.filterValues,
  resultsFromFilter: state.movies.resultsFromFilter,
});

const mapDispatchToProps = dispatch => ({
  setSearchResults: payload => dispatch(setResults(payload)),
  setSearchInputValue: payload => dispatch(setSearchInputValue(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

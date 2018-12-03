import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SelectFilter from '../Components/SelectFilter';
import {
  setResults,
  setFilterValues,
  setFilterSearchResults,
} from '../actions';

class Filter extends PureComponent {
  render() {
    return (
      <SelectFilter
        allMovies={this.props.allMovies}
        results={this.props.results}
        genre={this.props.genre}
        setSearchResults={this.props.setSearchResults}
        setFilterSearchResults={this.props.setFilterSearchResults}
        value={this.props.value}
        setFilterValues={this.props.setFilterValues}
        inputValue={this.props.inputValue}
      />
    );
  }
}

const mapStateToProps = state => ({
  allMovies: state.movies.allMovies,
  results: state.movies.results,
  genre: state.movies.genre,
  value: state.movies.filterValues,
  inputValue: state.movies.inputValue,
});

const mapDispatchToProps = dispatch => ({
  setSearchResults: payload => dispatch(setResults(payload)),
  setFilterSearchResults: payload => dispatch(setFilterSearchResults(payload)),
  setFilterValues: payload => dispatch(setFilterValues(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);

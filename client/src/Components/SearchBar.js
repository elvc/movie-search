import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';

class SearchBar extends Component {
  componentDidUpdate(prevProps) {
    // to make sure if there's a change in either filters or input value, we need to perform search again
    if (
      prevProps.filterValues.length !== this.props.filterValues.length ||
      prevProps.inputValue !== this.props.inputValue
    ) {
      this.performSearch();
    }
  }

  performSearch = () => {
    const {
      allMovies,
      setSearchResults,
      filterValues,
      inputValue,
      resultsFromFilter,
    } = this.props;

    // settings for Fuse.js API
    const options = {
      shouldSort: true,
      threshold: 0.2,
      location: 0,
      distance: 100,
      minMatchCharLength: 1,
      keys: ['title'],
    };
    let fuse;
    let result = [];

    if (filterValues.length === 0 && inputValue === '') {
      // initial state
      result = allMovies;
    } else if (filterValues.length === 0 && inputValue !== '') {
      // search by title only. No filter
      fuse = new Fuse(allMovies, options);
      result = fuse.search(inputValue);
    } else if (filterValues.length > 0 && inputValue === '') {
      // Search by filters only. No search terms
      result = resultsFromFilter;
    } else {
      // When there's both filter and search terms
      fuse = new Fuse(resultsFromFilter, options);
      result = fuse.search(inputValue);
    }
    setSearchResults(result);
  };

  // to prevent resetting the form on "Enter"
  handleSubmit = event => event.preventDefault();

  // Fire on any changes to the search input field
  // Can search based on fields listed on 'keys' array
  handleKeyChange = event => {
    this.props.setSearchInputValue(event.target.value);
    this.performSearch();
  };

  render() {
    return (
      <form className="col-7" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            id="search-bar"
            value={this.props.inputValue}
            placeholder="Search by Title"
            onChange={this.handleKeyChange}
            type="search"
          />
        </div>{' '}
      </form>
    );
  }
}

SearchBar.propTypes = {
  allMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSearchResults: PropTypes.func.isRequired,
  resultsFromFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchBar;

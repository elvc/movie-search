/**
 * Filter will be used as the first step to get results. The search bar will use the results generated
 * from the filter for further searching
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SelectFilter extends Component {
  handleChange = value => {
    const {
      allMovies,
      setSearchResults,
      setFilterValues,
      setFilterSearchResults,
    } = this.props;

    setFilterValues(value);
    let result = [];

    if (value.length > 0) {
      // filter list based on all selected genre
      value.forEach(v => {
        result = [...result, ...allMovies.filter(res => res.genre === v.value)];
      });
    } else {
      result = allMovies;
    }

    setFilterSearchResults(result);
    setSearchResults(result);
  };

  render() {
    const { genre, value } = this.props;

    return (
      <form className="col-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <Select
            id="select-genre"
            className="form-control border-0 p-0"
            name="form-field-name"
            placeholder="Select Genre"
            value={value}
            onChange={this.handleChange}
            options={genre}
            onBlurResetsInput={false}
            onSelectResetsInput={false}
            multi
          />
        </div>{' '}
      </form>
    );
  }
}

SelectFilter.propTypes = {
  allMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSearchResults: PropTypes.func.isRequired,
  setFilterValues: PropTypes.func.isRequired,
  setFilterSearchResults: PropTypes.func.isRequired,
};

export default SelectFilter;

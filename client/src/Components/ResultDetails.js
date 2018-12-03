import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Results will be displayed via this component
class ResultDetails extends Component {
  render() {
    const { results } = this.props;

    // sort by title by default
    results.sort((a, b) => {
      const nameA = a.title.toUpperCase(); // ignore upper and lowercase
      const nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });

    return (
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th className="col" scope="col">
              Title
            </th>
            <th className="col" scope="col">
              Genre
            </th>
            <th className="col" scope="col">
              Year
            </th>
            <th className="col" scope="col">
              Director
            </th>
            <th className="col" scope="col">
              Cast
            </th>
            <th className="col" scope="col">
              Notes
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((movie, index) => (
            <tr key={index}>
              <td className="col"> {movie.title} </td>
              <td className="col"> {movie.genre} </td>
              <td className="col"> {movie.year} </td>
              <td className="col"> {movie.director} </td>
              <td className="col"> {movie.cast} </td>
              <td className="col"> {movie.notes} </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

ResultDetails.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResultDetails;

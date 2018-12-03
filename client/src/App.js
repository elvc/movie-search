import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setResults, setAllMovies, setOptions } from './actions';
import Search from './Containers/Search';
import Result from './Containers/Result';
import Filter from './Containers/Filter';

class App extends Component {
  componentDidMount() {
    axios
      .get('http://localhost:3001/api/movies')
      .then(({ data }) => {
        // subset of data
        data.splice(200, 20000);
        // initialize Store. Keep this in case we need to retrieve original data
        this.props.setAllMovies(data);
        // prepare for rendering results.
        this.props.setResults(data);
        // build options for Select element (filter)
        this.buildGenreOptions(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  // for the filter options
  buildGenreOptions = data => {
    const options = [];
    const uniqueGenre = [...new Set(data.map(movie => movie.genre))];
    uniqueGenre.forEach(genre => {
      if (genre) {
        options.push({
          value: genre,
          label: genre,
        });
      }
    });

    this.props.setGenreOptions(options);
  };

  render() {
    return (
      <div className="container">
        <header>
          <h1 className="text-center mt-4 mb-4">Movie Catalog</h1>
          <div className="container">
            <div className="row">
              <Filter />
              <Search />
            </div>
          </div>
          <Result />
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setAllMovies: payload => dispatch(setAllMovies(payload)),
  setResults: payload => dispatch(setResults(payload)),
  setGenreOptions: paylaad => dispatch(setOptions(paylaad)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(App);

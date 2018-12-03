import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ResultDetails from '../Components/ResultDetails';

class Result extends PureComponent {
  render() {
    return <ResultDetails results={this.props.results} />;
  }
}

const mapStateToProps = state => ({
  results: state.movies.results,
});

export default connect(mapStateToProps)(Result);

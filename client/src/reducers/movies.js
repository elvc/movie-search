import {
  SET_RESULTS,
  SET_ALL_MOVIES,
  SET_OPTIONS,
  SET_FILTER_VALUES,
  SET_SEARCH_INPUT_VALUE,
  SET_FILTER_SEARCH_RESULTS,
} from '../actions';

const initialState = {
  results: [], // final results
  allMovies: [], // results from initial data fetch
  genre: [], // options for select element to search
  filterValues: [], // values (genre) selected for search
  inputValue: '', // search input value in the search bar
  resultsFromFilter: [], // results generated after applying filter
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_MOVIES:
      return {
        ...state,
        allMovies: action.payload,
      };
    case SET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    case SET_FILTER_SEARCH_RESULTS:
      return {
        ...state,
        resultsFromFilter: action.payload,
      };
    case SET_OPTIONS:
      return {
        ...state,
        genre: action.payload,
      };
    case SET_FILTER_VALUES:
      return {
        ...state,
        filterValues: action.payload,
      };
    case SET_SEARCH_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};

export default movies;
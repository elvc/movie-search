export const SET_RESULTS = 'SET_RESULTS';
export const SET_FILTER_SEARCH_RESULTS = 'SET_FILTER_SEARCH_RESULTS';

// Set final results to be displayed
export function setResults(payload) {
  return {
    type: SET_RESULTS,
    payload: payload,
  };
}

// set results generated from filter, preparing for further filter in search bar
export function setFilterSearchResults(payload) {
  return {
    type: SET_FILTER_SEARCH_RESULTS,
    payload: payload,
  };
}

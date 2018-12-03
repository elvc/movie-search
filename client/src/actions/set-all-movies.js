// Set results after finish fetching data
export const SET_ALL_MOVIES = 'SET_ALL_MOVIES';

export function setAllMovies(payload) {
  return {
    type: SET_ALL_MOVIES,
    payload: payload,
  };
}
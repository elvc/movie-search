export const SET_SEARCH_INPUT_VALUE = 'SET_SEARCH_INPUT_VALUE';

export function setSearchInputValue(payload) {
  return {
    type: SET_SEARCH_INPUT_VALUE,
    payload: payload,
  };
}
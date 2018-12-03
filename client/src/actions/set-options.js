// Set options in preparation for react-select element
export const SET_OPTIONS = 'SET_OPTIONS';

export function setOptions(payload) {
  return {
    type: SET_OPTIONS,
    payload: payload,
  };
}
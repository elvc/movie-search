// set filter values for the react-select
export const SET_FILTER_VALUES = 'SET_FILTER_VALUES';

export function setFilterValues(payload) {
  return {
    type: SET_FILTER_VALUES,
    payload: payload,
  };
}
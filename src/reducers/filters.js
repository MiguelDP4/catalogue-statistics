import { CHANGE_FILTER, INITIAL_FILTER_STATE } from '../constants';

const changeFilter = (state, action) => action.filter;

function filters(state = INITIAL_FILTER_STATE, action = '') {
  switch(action.type) {
    case CHANGE_FILTER:
      return changeFilter(state, action);
    default:
      return state;
  }
}

export default filters;
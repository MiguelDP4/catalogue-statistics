import { CHANGE_ORDER, INITIAL_ORDER_STATE } from '../constants';

const changeOrder = (state, action) => action.order;

function order(state = INITIAL_ORDER_STATE, action = '') {
  switch(action.type) {
    case CHANGE_ORDER:
      return changeOrder(state, action);
    default:
      return state;
  }
}

export default order;
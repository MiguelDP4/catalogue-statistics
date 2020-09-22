import {
  GET_REQUEST_SUCCESS,
  GET_REQUEST_PENDING,
  INITIAL_API_GET_STATE,
} from '../constants';

function apiget(state = INITIAL_API_GET_STATE, action) {
  switch (action.type) {
    case GET_REQUEST_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_REQUEST_SUCCESS:
      return {
        pending: false,
        pokemons: [...state.pokemons, action.pokemons],
      };
    default:
      return state;
  }
}

export default apiget;

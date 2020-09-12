import {
  GET_REQUEST_ERROR,
  GET_REQUEST_SUCCESS,
  GET_REQUEST_PENDING,
  INITIAL_API_GET_STATE,
} from '../constants';
import getPokemon from '../async/fetchRequest';

function apiget(state = INITIAL_API_GET_STATE, action) {
  switch(action.type) {
    case GET_REQUEST_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_REQUEST_SUCCESS:
      return {
        pending: false,
        pokemons: action.pokemons,
      };
    // case GET_REQUEST_ERROR:
    //   return {
    //     ...state,
    //     pending: false,
    //     error: action.error
    //   };
    default:
      return state;
  }
}

export default apiget;
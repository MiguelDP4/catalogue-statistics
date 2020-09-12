import {
  CHANGE_FILTER,
  CHANGE_ORDER,
  GET_REQUEST_ERROR,
  GET_REQUEST_SUCCESS,
  GET_REQUEST_PENDING,
} from '../constants';
import getAllPokemon from '../async/fetchRequest';
/* objFilter is an object with various parameters
The structure will be:
{
  type: pokemon_type,
  name: snippet of the pokemon's name
} */
export const changeFilter = objFilter => ({
  type: CHANGE_FILTER,
  filter: objFilter,
});

export const changeOrder = order => ({
  type: CHANGE_ORDER,
  order,
});

export const APIcallPending = pending => ({
  type: GET_REQUEST_PENDING,
  pending,
});

const APIcallSuccess = pokemons => ({
  type: GET_REQUEST_SUCCESS,
  pokemons,
});

export function searchAllPokemon() {
  return async function (dispatch) {
    dispatch(APIcallPending());
    const response = await getAllPokemon();
    return dispatch(APIcallSuccess(response));
  };
}

export const APIcallError = error => ({
  type: GET_REQUEST_ERROR,
  error,
});

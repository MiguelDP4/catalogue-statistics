import {
  CHANGE_FILTER,
  CHANGE_ORDER,
  GET_REQUEST_ERROR,
  GET_REQUEST_SUCCESS,
  GET_REQUEST_PENDING,
} from '../constants';
import getPokemon from '../async/fetchRequest';

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

export function searchAPokemon(index) {
  // eslint-disable-next-line func-names
  return async function (dispatch) {
    dispatch(APIcallPending());
    const response = await getPokemon(index);
    return dispatch(APIcallSuccess(response));
  };
}

export const APIcallError = error => ({
  type: GET_REQUEST_ERROR,
  error,
});

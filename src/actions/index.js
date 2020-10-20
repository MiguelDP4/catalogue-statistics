import {
  CHANGE_FILTER,
  CHANGE_ORDER,
  GET_REQUEST_ERROR,
  GET_REQUEST_SUCCESS,
  GET_REQUEST_PENDING,
  CHANGE_POKEMON,
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

export const changeSelectedPokemon = selectedPokemon => ({
  type: CHANGE_POKEMON,
  selectedPokemon,
});

export const APIcallPending = pending => ({
  type: GET_REQUEST_PENDING,
  pending,
});

const APIcallSuccess = pokemons => ({
  type: GET_REQUEST_SUCCESS,
  pokemons,
});

const APIcallError = error => ({
  type: GET_REQUEST_ERROR,
  error,
});

export const searchAPokemon = index => async dispatch => {
  dispatch(APIcallPending());
  const response = await getPokemon(index);
  if(response.id !== "not found"){
    return dispatch(APIcallSuccess(response));
  } else {
    return dispatch(APIcallError(response));
  }
  
};

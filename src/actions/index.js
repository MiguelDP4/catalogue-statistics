import {
  CHANGE_FILTER,
  CHANGE_ORDER,
  GET_REQUEST_ERROR,
  GET_REQUEST_SUCCESS,
  GET_REQUEST_PENDING
} from '../constants';
/*objFilter is an object with various parameters
The structure will be:
{
  type: pokemon_type,
  name: snippet of the pokemon's name
}*/
export const changeFilter = objFilter => ({
  type: CHANGE_FILTER,
  filter: objFilter,
});

export const changeOrder = order => ({
  type: CHANGE_ORDER,
  order: order,
});

export const APIcallPending = () => ({
  type: GET_REQUEST_PENDING,
})

export const APIcallSuccess = data => ({
  type: GET_REQUEST_SUCCESS,
  response: data,
})

export const APIcallError = error => ({
  type: GET_REQUEST_ERROR,
  error: error,
})
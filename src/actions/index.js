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

/*objOrder is an object with various parameters
The structure will be:
{
  orderBy: parameterString,  (This could be type, name or pokedex number)
  showQuantity: integer,     (This is the number of pokemon the user will see on their page)
  page: integer,              (This is going to be used for pagination)
}*/

export const changeOrder = objOrder => ({
  type: CHANGE_ORDER,
  order: objOrder,
});

export const APIcallPending = () => ({
  type: GET_REQUEST_PENDING,
})

export const APIcallSuccess = call => ({
  type: GET_REQUEST_SUCCESS,
  response: call,
})

export const APIcallError = error => ({
  type: GET_REQUEST_ERROR,
  error: error,
})
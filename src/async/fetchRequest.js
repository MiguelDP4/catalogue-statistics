import { APIcallPending, APIcallSuccess, APIcallError } from '../actions/index';

const fetchRequest = (request) => {
  return dispatch => {
    dispatch(APIcallPending());
    fetch(request)
    .then(response => response.json())
    .then(response => {
      if(response.error) {
        throw(response.error);
      }
      dispatch(APIcallSuccess(response));
      return response;
    })
    .catch(error => {
      dispatch(APIcallError(error));
    })
  }
}

export default fetchRequest;
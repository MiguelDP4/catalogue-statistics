import {
  GET_REQUEST_ERROR,
  GET_REQUEST_SUCCESS,
  GET_REQUEST_PENDING,
  INITIAL_API_GET_STATE,
} from '../constants';

function apiget(state = INITIAL_API_GET_STATE, action) {
  switch(action.type) {
    case GET_REQUEST_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_REQUEST_SUCCESS:
      return {
        ...state,
        pending: false,
        response: action.payload
      };
    case GET_REQUEST_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const getResponse = state => state.response;
export const getResponsePending = state => state.pending;
export const getResponseError = state => state.error;
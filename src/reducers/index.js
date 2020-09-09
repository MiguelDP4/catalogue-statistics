import {
  combineReducers
} from 'redux';
import {
  getResponse,
  getResponsePending,
  getResponseError,
} from './apiget';
import order from './order';
import filters from './filters';

export default combineReducers({
  // getResponse,
  // getResponsePending,
  // getResponseError,
  // order,
  filters
});
import {
  combineReducers,
} from 'redux';
import pokemons from './apiget';
import order from './order';
import filters from './filters';

export default combineReducers({
  pokemons,
  order,
  filters,
});

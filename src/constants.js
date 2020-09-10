export const GET_REQUEST_PENDING = 'GET_REQUEST_PENDING';
export const GET_REQUEST_SUCCESS = 'GET_REQUEST_SUCCESS';
export const GET_REQUEST_ERROR = 'GET_REQUEST_ERROR';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_ORDER = 'CHANGE_ORDER';
export const POKEMON_TYPE = 'POKEMON_TYPE';
export const POKEMON_NAME = 'POKEMON_NAME';
export const DEX_NUMBER = 'DEX_NUMBER';
const DEFAULT_SHOW_QUANTITY = 26;
export const INITIAL_FILTER_STATE = {
  type: 'all',
  name: '',
};
export const INITIAL_ORDER_STATE = {
  orderBy: DEX_NUMBER,
  showQuantity: DEFAULT_SHOW_QUANTITY,
  page: 1,
};
export const INITIAL_API_GET_STATE = {
  pending: false,
  response: '',
  error: null,
};
export const POKEMON_TYPES = [
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy',
];
export const GET_REQUEST_PENDING = 'GET_REQUEST_PENDING';
export const GET_REQUEST_SUCCESS = 'GET_REQUEST_SUCCESS';
export const GET_REQUEST_ERROR = 'GET_REQUEST_ERROR';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_ORDER = 'CHANGE_ORDER';
export const CHANGE_POKEMON = 'CHANGE_POKEMON';
export const POKEMON_TYPE = 'Pokemon Type';
export const POKEMON_NAME = 'Pokemon Name';
export const DEX_NUMBER = 'Pokedex Number';
export const DEFAULT_SELECTED_POKEMON = 'bulbasaur';
export const ORDER_CATEGORY = [DEX_NUMBER, POKEMON_NAME, POKEMON_TYPE];
export const INITIAL_FILTER_STATE = {
  type: 'all',
  name: '',
};
export const INITIAL_ORDER_STATE = {
  orderBy: DEX_NUMBER,
};
export const INITIAL_API_GET_STATE = {
  pending: true,
  pokemons: [],
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

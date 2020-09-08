export const GET_REQUEST = 'GET_REQUEST';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_ORDER = 'CHANGE_ORDER';
export const POKEMON_TYPE = 'POKEMON_TYPE';
export const POKEMON_NAME = 'POKEMON_NAME';
export const DEX_NUMBER = 'DEX_NUMBER';
const DEFAULT_SHOW_QUANTITY = 26;
export const INITIAL_FILTER_STATE = {
  type: '',
  name: '',
};
export const INITIAL_ORDER_STATE = {
  orderBy: DEX_NUMBER,
  showQuantity: DEFAULT_SHOW_QUANTITY,
  page: 1,
};
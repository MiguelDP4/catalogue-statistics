import {
  changeFilter,
  changeOrder,
  changeSelectedPokemon,
  APIcallPending,
} from '../index';

import {
  CHANGE_FILTER,
  CHANGE_ORDER,
  POKEMON_NAME,
  POKEMON_TYPE,
  DEX_NUMBER,
  CHANGE_POKEMON,
  GET_REQUEST_PENDING,
}
  from '../../constants';

const filter1 = {
  type: 'all',
  name: '',
};

const filter2 = {
  type: 'fire',
  name: '',
};

const filter3 = {
  type: 'fire',
  name: 'char',
};

const filterAction1 = {
  type: CHANGE_FILTER,
  filter: filter1,
};

const filterAction2 = {
  type: CHANGE_FILTER,
  filter: filter2,
};

const filterAction3 = {
  type: CHANGE_FILTER,
  filter: filter3,
};

it('returns an action of type CHANGE_FILTER with filter1', () => {
  expect(changeFilter(filter1)).toEqual(filterAction1);
});

it('returns an action of type CHANGE_FILTER with filter2', () => {
  expect(changeFilter(filter2)).toEqual(filterAction2);
});

it('returns an action of type CHANGE_FILTER with filter3', () => {
  expect(changeFilter(filter3)).toEqual(filterAction3);
});

const order1 = {
  orderBy: DEX_NUMBER,
};

const order2 = {
  orderBy: POKEMON_TYPE,
};

const order3 = {
  orderBy: POKEMON_NAME,
};

const orderAction1 = {
  type: CHANGE_ORDER,
  order: order1,
};

const orderAction2 = {
  type: CHANGE_ORDER,
  order: order2,
};

const orderAction3 = {
  type: CHANGE_ORDER,
  order: order3,
};

it('returns an action of type CHANGE_ORDER with order1', () => {
  expect(changeOrder(order1)).toEqual(orderAction1);
});

it('returns an action of type CHANGE_ORDER with order2', () => {
  expect(changeOrder(order2)).toEqual(orderAction2);
});

it('returns an action of type CHANGE_ORDER with order3', () => {
  expect(changeOrder(order3)).toEqual(orderAction3);
});

const selectedPokemon1 = 'charmander';

const selectedPokemon2 = 'squirtle';

const selectedPokemon3 = 'bulbasaur';

const selectedPokemonAction1 = {
  type: CHANGE_POKEMON,
  selectedPokemon: selectedPokemon1,
};

const selectedPokemonAction2 = {
  type: CHANGE_POKEMON,
  selectedPokemon: selectedPokemon2,
};

const selectedPokemonAction3 = {
  type: CHANGE_POKEMON,
  selectedPokemon: selectedPokemon3,
};

it('returns an action of type CHANGE_POKEMON with selectedPokemon1', () => {
  expect(changeSelectedPokemon(selectedPokemon1)).toEqual(selectedPokemonAction1);
});

it('returns an action of type CHANGE_POKEMON with selectedPokemon2', () => {
  expect(changeSelectedPokemon(selectedPokemon2)).toEqual(selectedPokemonAction2);
});

it('returns an action of type CHANGE_POKEMON with selectedPokemon3', () => {
  expect(changeSelectedPokemon(selectedPokemon3)).toEqual(selectedPokemonAction3);
});

it('returns an action of type GET_REQUEST_PENDING with pending = true', () => {
  expect(APIcallPending(true)).toEqual({
    type: GET_REQUEST_PENDING,
    pending: true,
  });
});

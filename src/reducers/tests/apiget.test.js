import apiget from '../apiget';
import {
  GET_REQUEST_PENDING,
  GET_REQUEST_SUCCESS,
  INITIAL_API_GET_STATE,
}
from '../../constants';

const pokemonList = [
  {
    id: 1,
    name: 'bulbasaur',
    types: ['grass', 'poison'],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      specialattack: 65,
      specialdefense: 65,
      speed: 45,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/1.png',
  },
  {
    id: 2,
    name: 'ivysaur',
    types: ['grass', 'poison'],
    stats: {
      hp: 60,
      attack: 62,
      defense: 63,
      specialattack: 80,
      specialdefense: 80,
      speed: 60,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/2.png',
  },
  {
    id: 3,
    name: 'venusaur',
    types: ['grass', 'poison'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/3.png',
  },
  {
    id: 4,
    name: 'charmander',
    types: ['fire'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/4.png',
  },
  {
    id: 5,
    name: 'charmeleon',
    types: ['fire'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/5.png',
  },
  {
    id: 6,
    name: 'charizard',
    types: ['fire', 'flying'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/6.png',
  },
  {
    id: 7,
    name: 'squirtle',
    types: ['water'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/7.png',
  },
  {
    id: 8,
    name: 'wartortle',
    types: ['water'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/8.png',
  },
  {
    id: 9,
    name: 'blastoise',
    types: ['water'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/9.png',
  },
  {
    id: 10,
    name: 'caterpie',
    types: ['bug'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/10.png',
  },
  {
    id: 11,
    name: 'metapod',
    types: ['bug'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/11.png',
  },
  {
    id: 12,
    name: 'butterfree',
    types: ['bug', 'flying'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/12.png',
  },
  {
    id: 13,
    name: 'weedle',
    types: ['bug'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/13.png',
  },
  {
    id: 14,
    name: 'kakuna',
    types: ['bug'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/14.png',
  },
  {
    id: 15,
    name: 'beedrill',
    types: ['bug', 'poison'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/15.png',
  },
  {
    id: 16,
    name: 'pidgey',
    types: ['normal', 'flying'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/16.png',
  },
  {
    id: 17,
    name: 'pidgeotto',
    types: ['normal', 'flying'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/17.png',
  },
  {
    id: 18,
    name: 'pidgeot',
    types: ['normal', 'flying'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/18.png',
  },
  {
    id: 19,
    name: 'rattata',
    types: ['normal'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/19.png',
  },
  {
    id: 20,
    name: 'raticate',
    types: ['normal'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/20.png',
  },
];

const pendingRequest = {
  type: GET_REQUEST_PENDING,
  pending: true,
};

const pendingReducerResult = {
  pending: true,
  pokemons: [],
};

const finishedFetch = {
  type: GET_REQUEST_SUCCESS,
  pending: false,
  pokemons: pokemonList,
};

const finishedFetchResult = {
  pending: false,
  pokemons: [pokemonList],
};

it('changes status of request to pending true', () => {
  expect(apiget(INITIAL_API_GET_STATE, pendingRequest)).toEqual(pendingReducerResult);
});

it('changes status of request to pending false and payload contains pokemon', () => {
  expect(apiget(INITIAL_API_GET_STATE, finishedFetch)).toEqual(finishedFetchResult);
});

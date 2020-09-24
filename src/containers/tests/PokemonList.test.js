import { mount, configure } from 'enzyme';
import React from 'react';
import PokemonList from '../PokemonList';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Test PokemonList container', () => {
  const pokemons = [
    {
    id: 3,
    name: "venusaur",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  }, {
    id: 1,
    name: "bulbasaur",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  }, {
    id: 17,
    name: "pidgeotto",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
  }, {
    id: 42,
    name: "golbat",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
  }, {
    id: 91,
    name: "cloyster",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
  }, {
    id: 97,
    name: "hypno",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
  }, {
    id: 25,
    name: "pikachu",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  }, {
    id: 36,
    name: "clefable",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
  }, {
    id: 50,
    name: "diglett",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
  }, {
    id: 15,
    name: "beedrill",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
  }, {
    id: 76,
    name: "golem",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
  }, {
    id: 159,
    name: "croconaw",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png"
  }, {
    id: 145,
    name: "zapdos",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
  }, {
    id: 165,
    name: "ledyba",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png"
  }, {
    id: 105,
    name: "marowak",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
  }, {
    id: 172,
    name: "pichu",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png"
  }, {
    id: 174,
    name: "igglybuff",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png"
  }, {
    id: 175,
    name: "togepi",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png"
  }, {
    id: 187,
    name: "hoppip",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png"
  }, {
    id: 197,
    name: "umbreon",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png"
  }, {
    id: 13,
    name: "weedle",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
  }, {
    id: 10,
    name: "caterpie",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
  }, {
    id: 2,
    name: "ivysaur",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  }, {
    id: 12,
    name: "butterfree",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
  }, {
    id: 41,
    name: "zubat",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
  }, {
    id: 20,
    name: "raticate",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
  }, {
    id: 14,
    name: "kakuna",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
  }, {
    id: 775,
    name: "komala",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png"
  }, {
    id: 780,
    name: "drampa",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png"
  }, {
    id: 784,
    name: "kommo-o",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png"
  }, {
    id: 8,
    name: "wartortle",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  }, {
    id: 5,
    name: "charmeleon",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  }, {
    id: 782,
    name: "jangmo-o",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png"
  }, {
    id: 783,
    name: "hakamo-o",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png"
  }, {
    id: 4,
    name: "charmander",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  }, {
    id: 7,
    name: "squirtle",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  }, {
    id: 16,
    name: "pidgey",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
  }, {
    id: 18,
    name: "pidgeot",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
  }, {
    id: 21,
    name: "spearow",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
  }, {
    id: 26,
    name: "raichu",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
  }, {
    id: 30,
    name: "nidorina",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
  }, {
    id: 33,
    name: "nidorino",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
  }, {
    id: 38,
    name: "ninetales",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
  }, {
    id: 43,
    name: "oddish",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
  }, {
    id: 44,
    name: "gloom",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
  }, {
    id: 45,
    name: "vileplume",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
  }, {
    id: 47,
    name: "parasect",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
  }, {
    id: 48,
    name: "venonat",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
  }, {
    id: 49,
    name: "venomoth",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
  }, {
    id: 51,
    name: "dugtrio",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
  }, {
    id: 59,
    name: "arcanine",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
  }, {
    id: 60,
    name: "poliwag",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
  }, {
    id: 62,
    name: "poliwrath",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
  }, {
    id: 63,
    name: "abra",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
  }, {
    id: 69,
    name: "bellsprout",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
  }, {
    id: 70,
    name: "weepinbell",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
  }, {
    id: 71,
    name: "victreebel",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
  }, {
    id: 73,
    name: "tentacruel",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
  }, {
    id: 75,
    name: "graveler",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
  }, {
    id: 77,
    name: "ponyta",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
  }, {
    id: 78,
    name: "rapidash",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
  }, {
    id: 81,
    name: "magnemite",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
  }, {
    id: 82,
    name: "magneton",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
  }, {
    id: 84,
    name: "doduo",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
  }, {
    id: 85,
    name: "dodrio",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
  }, {
    id: 87,
    name: "dewgong",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
  }, {
    id: 90,
    name: "shellder",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
  }, {
    id: 99,
    name: "kingler",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
  }, {
    id: 11,
    name: "metapod",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
  }, {
    id: 6,
    name: "charizard",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  }, {
    id: 9,
    name: "blastoise",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  }, {
    id: 23,
    name: "ekans",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
  }, {
    id: 24,
    name: "arbok",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
  }, {
    id: 27,
    name: "sandshrew",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
  }, {
    id: 28,
    name: "sandslash",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
  }, {
    id: 29,
    name: "nidoran-f",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
  }, {
    id: 31,
    name: "nidoqueen",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
  }, {
    id: 34,
    name: "nidoking",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
  }, {
    id: 37,
    name: "vulpix",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
  }, {
    id: 39,
    name: "jigglypuff",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
  }, {
    id: 40,
    name: "wigglytuff",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
  }, {
    id: 53,
    name: "persian",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
  }, {
    id: 54,
    name: "psyduck",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
  }, {
    id: 55,
    name: "golduck",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
  }, {
    id: 56,
    name: "mankey",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
  }, {
    id: 58,
    name: "growlithe",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
  }, {
    id: 64,
    name: "kadabra",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
  }, {
    id: 65,
    name: "alakazam",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
  }, {
    id: 66,
    name: "machop",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
  }, {
    id: 67,
    name: "machoke",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
  }, {
    id: 68,
    name: "machamp",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
  }, {
    id: 72,
    name: "tentacool",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
  }, {
    id: 74,
    name: "geodude",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
  }, {
    id: 79,
    name: "slowpoke",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
  }, {
    id: 88,
    name: "grimer",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
  }, {
    id: 89,
    name: "muk",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
  }, {
    id: 92,
    name: "gastly",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
  }, {
    id: 93,
    name: "haunter",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
  }, {
    id: 94,
    name: "gengar",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
  }, {
    id: 95,
    name: "onix",
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80
    },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
  }];
  let wrapper;
  const mockHandleClick = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <PokemonList 
          handleClick={mockHandleClick}
          pokemons={pokemons}
          filters={{type: 'all', name: ''}}
          order={{orderBy: 'Pokedex Number'}}
        />
      </Router>,
    );
  });
  it('should create a container with class pokemon-list', () => {
    expect(wrapper.find('.pokemon-list')).toHaveLength(1);
  });
  
  it('should create the same amount of pokemon cards as there are pokemon in the array', () => {
    expect(wrapper.find('.pokemon-card')).toHaveLength(pokemons.length);
  });

  
});
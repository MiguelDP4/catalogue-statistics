import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { changeFilter, changeOrder } from '../actions/index';
import Pokemon from '../components/Pokemon';
import logo from '../logo.svg';
import Filter from '../components/PokemonFilter';
import { POKEMON_NAME, DEX_NUMBER, POKEMON_TYPE } from '../constants';

class PokemonList extends React.Component {
  constructor() {
    super();
    this.pokemonList = [
      {
        "id": 1,
        "name": "bulbasaur",
        "types": ["grass", "poison"],
        "stats": {
          "hp": 45,
          "attack": 49,
          "defense": 49,
          "specialattack": 65,
          "specialdefense": 65,
          "speed": 45,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/1.png",
      },
      {
        "id": 2,
        "name": "ivysaur",
        "types": ["grass", "poison"],
        "stats": {
          "hp": 60,
          "attack": 62,
          "defense": 63,
          "specialattack": 80,
          "specialdefense": 80,
          "speed": 60,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/2.png",
      },
      {
        "id": 3,
        "name": "venusaur",
        "types": ["grass", "poison"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/3.png",
      },
      {
        "id": 4,
        "name": "charmander",
        "types": ["fire"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/4.png",
      },
      {
        "id": 5,
        "name": "charmeleon",
        "types": ["fire"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/5.png",
      },
      {
        "id": 6,
        "name": "charizard",
        "types": ["fire", "flying"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/6.png",
      },
      {
        "id": 7,
        "name": "squirtle",
        "types": ["water"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/7.png",
      },
      {
        "id": 8,
        "name": "wartortle",
        "types": ["water"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/8.png",
      },
      {
        "id": 9,
        "name": "blastoise",
        "types": ["water"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/9.png",
      },
      {
        "id": 10,
        "name": "caterpie",
        "types": ["bug"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/10.png",
      },
      {
        "id": 11,
        "name": "metapod",
        "types": ["bug"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/11.png",
      },
      {
        "id": 12,
        "name": "butterfree",
        "types": ["bug", "flying"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/12.png",
      },
      {
        "id": 13,
        "name": "weedle",
        "types": ["bug"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/13.png",
      },
      {
        "id": 14,
        "name": "kakuna",
        "types": ["bug"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/14.png",
      },
      {
        "id": 15,
        "name": "beedrill",
        "types": ["bug", "poison"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/15.png",
      },
      {
        "id": 16,
        "name": "pidgey",
        "types": ["normal", "flying"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/16.png",
      },
      {
        "id": 17,
        "name": "pidgeotto",
        "types": ["normal", "flying"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/17.png",
      },
      {
        "id": 18,
        "name": "pidgeot",
        "types": ["normal", "flying"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/18.png",
      },
      {
        "id": 19,
        "name": "rattata",
        "types": ["normal"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/19.png",
      },
      {
        "id": 20,
        "name": "raticate",
        "types": ["normal"],
        "stats": {
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "specialattack": 100,
          "specialdefense": 100,
          "speed": 80,
        },
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/20.png",
      },
    ];

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    let element = event.target;
    while(!element.id.includes('pokemon-card-')) {
      element = element.parentElement;
    }
    if(element.className == 'pokemon-card') {
      element.className = 'pokemon-card-big';
      element.children[1].className = 'image-container-big';
      element.children[2].className = 'type-container-big';
      element.children[3].className = 'stats-container-big';
    } else if (element.className == 'pokemon-card-big'){
      element.className = 'pokemon-card';
      element.children[1].className = 'image-container';
      element.children[2].className = 'type-container';
      element.children[3].className = 'stats-container';
    }
  }

  handleChange() {
    const { changeFilter, changeOrder } = this.props;
    const pokemonName = document.getElementById('pokemon-name');
    const typesButton = document.getElementById('pokemon-type');
    const pokemonOrder = document.getElementById('pokemon-order');
    const newFilter = {
      type: typesButton.value,
      name: pokemonName.value,
    };
    const newOrder = {
      orderBy: pokemonOrder.value,
    }
    changeFilter(newFilter);
    changeOrder(newOrder);
  }

  filterPokemon(pokemonList, filters, order) {
    let newArray = [];
    if (filters.type !== 'all') {
      newArray = pokemonList.filter(pokemon => pokemon.types.includes(filters.type));
      newArray = newArray.filter(pokemon => pokemon.name.toLowerCase().includes(filters.name.toLowerCase()));
    } else {
      newArray = [...pokemonList]
      newArray = newArray.filter(pokemon => pokemon.name.toLowerCase().includes(filters.name.toLowerCase()));
    }
    if(order.orderBy === DEX_NUMBER) {
      return newArray;
    } else if(order.orderBy === POKEMON_NAME) {
      newArray.sort(function(a,b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if(order.orderBy === POKEMON_TYPE) {
      newArray.sort(function(a,b){
        let nameA = a.types[0].toUpperCase();
        let nameB = b.types[0].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
    console.log(newArray);
    return newArray;
  }

  render() {
    const { filters, order } = this.props;
    return (
      <div className='page-container'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Filter handleChange={this.handleChange} />
        </header>
        <div>
          <div className='pokemon-list'>
              {this.filterPokemon(this.pokemonList, filters, order).map(pokemon => (
                <Pokemon 
                key={pokemon.name}
                pokemonObject={pokemon}
                handleClick={this.handleClick}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
  order: state.order,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: objFilter => dispatch(changeFilter(objFilter)),
  changeOrder: order => dispatch(changeOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
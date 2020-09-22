import React from 'react';
import { PropTypes } from 'prop-types';
import Pokemon from '../components/Pokemon';
import { POKEMON_NAME, DEX_NUMBER, POKEMON_TYPE } from '../constants';
import { Link } from 'react-router-dom';

const filterPokemon = (pokemonList, filters, order) => {
  let newArray = [];
  if (pokemonList.length === 0) return newArray;
  if (filters.type !== 'all') {
    newArray = pokemonList.filter(pokemon => pokemon.types.includes(filters.type));
    newArray = newArray.filter(pokemon => pokemon.name.toLowerCase()
      .includes(filters.name.toLowerCase()));
  } else {
    newArray = [...pokemonList];
    newArray = newArray.filter(pokemon => pokemon.name.toLowerCase()
      .includes(filters.name.toLowerCase()));
  }
  if (order.orderBy === DEX_NUMBER) {
    return newArray.sort((a,b) => {
      const numA = a.id;
      const numB = b.id;
      if(numA < numB) {
        return -1;
      }
      if(numA > numB) {
        return 1;
      }
      return 0;
    });
  } if (order.orderBy === POKEMON_NAME) {
    newArray.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  } else if (order.orderBy === POKEMON_TYPE) {
    newArray.sort((a, b) => {
      const nameA = a.types[0].toUpperCase();
      const nameB = b.types[0].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  return newArray;
}

const PokemonList = props => {
  const { handleClick, pokemons, filters, order } = props;

  return (
    <div className="page-container">
      <div className="pokemon-list">
        {filterPokemon(pokemons, filters, order).map(pokemon => (
          <Link to={`/${pokemon.name}`} onClick={handleClick}>
            <Pokemon
              key={pokemon.name}
              pokemonObject={pokemon}
            />
          </Link>
          ))}
      </div>
    </div>
    );
}

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
  order: PropTypes.objectOf(PropTypes.string).isRequired,
  filters: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PokemonList;

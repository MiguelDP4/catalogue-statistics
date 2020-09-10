import React from 'react';
import { PropTypes } from 'prop-types';
import { POKEMON_TYPES, ORDER_CATEGORY } from '../constants';

//This is for testing, API will fill this instead
// const PokemonTypes = callAPI('https://pokeapi.co/api/v2/type');

// console.log("pokemon types: " + PokemonTypes);
// .map(typeObject => String(typeObject.name))
// .slice(0, 18);

export default function PokemonFilter(props) {
  const { handleChange } = props;
  return (
    <div className='filter-container'>
      <select className="types-button" onChange={handleChange} id='pokemon-type' >
        <option default key='all' value='all'>
          Pokemon Types
        </option>
        {POKEMON_TYPES.map(type => (
          <option key={type} value={`${type}`}>
            {type}
          </option>
        ))}
      </select>
      <input
      type="text"
      id="pokemon-name"
      placeholder="Search Pokémon by Species"
      className="search-pokemon-name"
      onChange={handleChange}
      ></input>
      <select className="types-button" onChange={handleChange} id='pokemon-order' >
        <option default key={ORDER_CATEGORY[0]} value={ORDER_CATEGORY[0]}>
          {ORDER_CATEGORY[0]}
        </option>
        {ORDER_CATEGORY.slice(1,ORDER_CATEGORY.length).map(order => (
          <option key={order} value={`${order}`}>
            {order}
          </option>
        ))}
      </select>
    </div>
  );
}

// PokemonFilter.propTypes = {
//   handleChange: PropTypes.func.isRequired,
// };

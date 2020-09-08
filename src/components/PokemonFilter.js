import React from 'react';
import { PropTypes } from 'prop-types';
import callAPI from '../async/fetchRequest';

//This is for testing, API will fill this instead
const PokemonTypes = callAPI('https://pokeapi.co/api/v2/type')
.map(typeObject => String(typeObject.name))
.slice(0, 18);

export default function PokemonFilter(props) {
  const { handleChange } = props;
  return (
    <select className="categories-button" onChange={handleChange}>
      <option default value="All Pokemon">
        Pokemon Types
      </option>
      {PokemonTypes.map(type => (
        <option key={type} value={`${type}`}>
          {type}
        </option>
      ))}
    </select>
  );
}

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

import React from 'react';
import { PropTypes } from 'prop-types';
import callAPI from '../async/fetchRequest';

//This is for testing, API will fill this instead
// const PokemonTypes = callAPI('https://pokeapi.co/api/v2/type');

// console.log("pokemon types: " + PokemonTypes);
// .map(typeObject => String(typeObject.name))
// .slice(0, 18);

export default function PokemonFilter(props) {
  // const { handleChange } = props;
  return (
    <select className="types-button" >
      <option default value="All Pokemon">
        Pokemon Types
      </option>
      {/* {PokemonTypes.map(type => (
        <option key={type} value={`${type}`}>
          {type}
        </option>
      ))} */}
    </select>
  );
}

// PokemonFilter.propTypes = {
//   handleChange: PropTypes.func.isRequired,
// };

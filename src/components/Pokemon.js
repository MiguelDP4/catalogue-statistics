import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = props => {
  const { pokemonObject } = props;
  return (
    <div
      id={`pokemon-card-${pokemonObject.name}`}
      className="pokemon-card"
    >
      <h3 className="pokemon-card-h3">{pokemonObject.name.toUpperCase()}</h3>
      <div className="image-container">
        <img src={pokemonObject.image} className="pokemon-card-img" loading="lazy" alt={`${pokemonObject.name}-sprite`} />
      </div>
      <div className="type-container">
        <b>TYPE: </b>
        <span>{pokemonObject.types[0]}</span>
        <span>{pokemonObject.types[1] ? ` / ${pokemonObject.types[1]}` : ''}</span>
      </div>
  </div>
  );
};

Pokemon.propTypes = {
  pokemonObject: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.array,
    stats: PropTypes.shape({
      hp: PropTypes.number,
      attack: PropTypes.number,
      defense: PropTypes.number,
      specialattack: PropTypes.number,
      specialdefense: PropTypes.number,
      speed: PropTypes.number,
    }),
  }).isRequired,
};

export default Pokemon;

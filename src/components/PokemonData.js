import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Exit from '../exit.svg';

const PokemonData = props => {
  const { pokemonObject } = props;
  return (pokemonObject
    ? (
      <div
        id="pokemon-data"
        className="pokemon-card-big"
      >
        <Link to="/"><img src={Exit} alt="Exit" className="exit-button" /></Link>
        <h3 className="pokemon-card-h3">{pokemonObject.name.toUpperCase()}</h3>
        <div className="image-container-big">
          <img src={pokemonObject.image} className="pokemon-card-img" loading="lazy" alt={`${pokemonObject.name}-sprite`} />
        </div>
        <div className="type-container-big">
          <b>TYPE: </b>
          <span>{pokemonObject.types[0]}</span>
          <span>{pokemonObject.types[1] ? ` / ${pokemonObject.types[1]}` : ''}</span>
        </div>
        <div className="stats-container-big">
          <div className="stats-names">
            <span className="stat-name">
              HP:
              {pokemonObject.stats.hp}
            </span>
            <span className="stat-name">
              ATTACK:
              {pokemonObject.stats.attack}
            </span>
            <span className="stat-name">
              DEFENSE:
              {pokemonObject.stats.defense}
            </span>
            <span className="stat-name">
              SPECIAL-ATTACK:
              {pokemonObject.stats.specialattack}
            </span>
            <span className="stat-name">
              SPECIAL-DEFENSE:
              {pokemonObject.stats.specialdefense}
            </span>
            <span className="stat-name">
              SPEED:
              {pokemonObject.stats.speed}
            </span>
          </div>
          <div className="stats-bars-container">
            <span className="stat-bar">
              <div className={`bar-stats w${Math.floor(pokemonObject.stats.hp / 2.55)}`} />
            </span>
            <span className="stat-bar">
              <div className={`bar-stats w${Math.floor(pokemonObject.stats.attack / 2.55)}`} />
            </span>
            <span className="stat-bar">
              <div className={`bar-stats w${Math.floor(pokemonObject.stats.defense / 2.55)}`} />
            </span>
            <span className="stat-bar">
              <div className={`bar-stats w${Math.floor(pokemonObject.stats.specialattack / 2.55)}`} />
            </span>
            <span className="stat-bar">
              <div className={`bar-stats w${Math.floor(pokemonObject.stats.specialdefense / 2.55)}`} />
            </span>
            <span className="stat-bar">
              <div className={`bar-stats w${Math.floor(pokemonObject.stats.speed / 2.55)}`} />
            </span>
          </div>
        </div>
      </div>
    )
    : (
      <div className="pokemon-card-big">
        <h2>INVALID POKEMON</h2>
      </div>
    )
  );
};

PokemonData.propTypes = {
  pokemonObject: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    stats: PropTypes.shape({
      hp: PropTypes.number,
      attack: PropTypes.number,
      defense: PropTypes.number,
      specialattack: PropTypes.number,
      specialdefense: PropTypes.number,
      speed: PropTypes.number,
    }),
    pokemons: PropTypes.objectOf.isRequired,
    pokemonName: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonData;

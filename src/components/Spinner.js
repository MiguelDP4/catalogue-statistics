import React from 'react';
import PropTypes from 'prop-types';
import loader from '../Pokeball.svg';

const Spinner = props => {
  const { pokemons } = props;
  return (
    <div className="loader-container">
      <img src={loader} className="loading" alt="loader" />
      <span>Loading, please wait...</span>
      <span>
        {Math.round((10000 * pokemons.length) / 807.0) / 100}
        %
      </span>
      <span className="load-bar-container">
        <div
          className="load-bar"
          style={
          {
            width: `${Math.round((10000 * pokemons.length) / 807.0) / 100}%`,
          }
        }
        />
      </span>
    </div>
  );
};

Spinner.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ).isRequired,
};

export default Spinner;

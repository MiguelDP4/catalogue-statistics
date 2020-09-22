import React from 'react';
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
  )
}

export default Spinner;
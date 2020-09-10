import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = (props) => {
  const { pokemonObject, handleClick } = props;
  return (
    <div id={`pokemon-card-${pokemonObject.name}`} className='pokemon-card' onClick={handleClick} >
      <h3 className='pokemon-card-h3' >{pokemonObject.name.toUpperCase()}</h3>
      <div className='image-container'>
        <img src={pokemonObject.image} className='pokemon-card-img' alt={`${pokemonObject.name}-image`} ></img>
      </div>
      <div className='type-container'>
          <b>TYPE: </b>
          <span>{pokemonObject.types[0]}</span>
          <span>{pokemonObject.types[1] ? ` / ${pokemonObject.types[1]}` : ''}</span>
      </div>
      <div className='stats-container'>
        <div className='stats-names'>
          <span className='stat-name'>HP: {pokemonObject.stats.hp}</span>
          <span className='stat-name'>ATTACK: {pokemonObject.stats.attack}</span>
          <span className='stat-name'>DEFENSE: {pokemonObject.stats.defense}</span>
          <span className='stat-name'>SPECIAL-ATTACK: {pokemonObject.stats.specialattack}</span>
          <span className='stat-name'>SPECIAL-DEFENSE: {pokemonObject.stats.specialdefense}</span>
          <span className='stat-name'>SPEED: {pokemonObject.stats.speed}</span>
        </div>
        <div className='stats-bars-container'>
        <span className='stat-bar'>
          <div style=
          {
            {
              height: '8px',
              backgroundColor: '#dffffa',
              width: `${pokemonObject.stats.hp / 2.55}%`,
            }
          } >
          </div>
        </span>
        <span className='stat-bar'>
          <div style=
          {
            {
              height: '8px',
              backgroundColor: '#dffffa',
              width: `${pokemonObject.stats.attack / 2.55}%`,
            }
          } >
          </div>
        </span>
        <span className='stat-bar'>
          <div style=
          {
            {
              height: '8px',
              backgroundColor: '#dffffa',
              width: `${pokemonObject.stats.defense / 2.55}%`,
            }
          } >
          </div>
        </span>
        <span className='stat-bar'>
          <div style=
          {
            {
              height: '8px',
              backgroundColor: '#dffffa',
              width: `${pokemonObject.stats.specialattack / 2.55}%`,
            }
          } >
          </div>
        </span>
        <span className='stat-bar'>
          <div style=
          {
            {
              height: '8px',
              backgroundColor: '#dffffa',
              width: `${pokemonObject.stats.specialdefense / 2.55}%`,
            }
          } >
          </div>
        </span>
        <span className='stat-bar'>
          <div style=
          {
            {
              height: '8px',
              backgroundColor: '#dffffa',
              width: `${pokemonObject.stats.speed / 2.55}%`,
            }
          } >
          </div>
        </span>
        </div>
      </div>
    </div>
  );
}

Pokemon.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemonObject: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Pokemon;
import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = (props) => {
  const { pokemonObject, handleClick } = props;
  return (
    <div className='pokemon-card' onClick={handleClick} >
      {pokemonObject.name}
    </div>
  );
}

Pokemon.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemonObject: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Pokemon;
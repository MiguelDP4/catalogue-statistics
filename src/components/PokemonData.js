import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PokemonData extends React.Component {
  constructor() {
    super();

    this.closeWindow = this.closeWindow.bind(this);
  }

  closeWindow() {

  }

  render() {
    const { pokemonName, pokemons } = this.props;
    console.log(pokemons);
    const pokemonObject = pokemons.pokemons.find(
      pokemon => pokemon.name === pokemonName );

    return ( pokemonObject ? 
    <div
      id={`pokemon-data`}
      className="pokemon-card-big"
    >
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
            <div style={
            {
              height: '8px',
              backgroundColor: '#dffffa',
              width: `${pokemonObject.stats.hp / 2.55}%`,
            }
          }
            />
          </span>
          <span className="stat-bar">
            <div style={
            {
              height: '8px',
              backgroundColor: '#dffffa',
              width: `${pokemonObject.stats.attack / 2.55}%`,
            }
          }
            />
          </span>
          <span className="stat-bar">
            <div style={
            {
              height: '8px',
              backgroundColor: '#dffffa',
              width: `${pokemonObject.stats.defense / 2.55}%`,
            }
          }
            />
          </span>
          <span className="stat-bar">
            <div style={
            {
              height: '8px',
              backgroundColor: '#dffffa',
              width: `${pokemonObject.stats.specialattack / 2.55}%`,
            }
          }
            />
          </span>
          <span className="stat-bar">
            <div style={
            {
              height: '8px',
              backgroundColor: '#dffffa',
              width: `${pokemonObject.stats.specialdefense / 2.55}%`,
            }
          }
            />
          </span>
          <span className="stat-bar">
            <div style={
            {
              height: '8px',
              backgroundColor: '#dffffa',
              width: `${pokemonObject.stats.speed / 2.55}%`,
            }
          }
            />
          </span>
        </div>
      </div>
    </div>
    :
    <div className="pokemon-card-big" >
      <h2>INVALID POKEMON</h2>
    </div>
    );
  };
}

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  selectedPokemon: state.selectedPokemon,
});

PokemonData.propTypes = {
  pokemons: PropTypes.objectOf.isRequired,
  pokemonName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(PokemonData);

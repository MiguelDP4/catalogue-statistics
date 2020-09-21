import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { changeFilter, changeOrder, searchAPokemon, changeSelectedPokemon } from '../actions/index';
import Pokemon from '../components/Pokemon';
import loader from '../Pokeball.svg';
import { POKEMON_NAME, DEX_NUMBER, POKEMON_TYPE } from '../constants';

class PokemonList extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.startComponentRender = this.startComponentRender.bind(this);
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    const { searchPokemon } = this.props;
    for (let i = 1; i <= 807; i += 1) {
      searchPokemon(i);
    }
  }

  startComponentRender() {
    const { pokemons } = this.props;
    if (pokemons.pokemons.length < 807) return false;
    return true;
  }

  filterPokemon(pokemonList, filters, order) {
    this.newArray = [];
    if (pokemonList.length === 0) return this.newArray;
    if (filters.type !== 'all') {
      this.newArray = pokemonList.filter(pokemon => pokemon.types.includes(filters.type));
      this.newArray = this.newArray.filter(pokemon => pokemon.name.toLowerCase()
        .includes(filters.name.toLowerCase()));
    } else {
      this.newArray = [...pokemonList];
      this.newArray = this.newArray.filter(pokemon => pokemon.name.toLowerCase()
        .includes(filters.name.toLowerCase()));
    }
    if (order.orderBy === DEX_NUMBER) {
      return this.newArray.sort((a,b) => {
        const numA = a.id;
        const numB = b.id;
        if(numA < numB) {
          return -1;
        }
        if(numA > numB) {
          return 1;
        }
        return 0;
      });
    } if (order.orderBy === POKEMON_NAME) {
      this.newArray.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if (order.orderBy === POKEMON_TYPE) {
      this.newArray.sort((a, b) => {
        const nameA = a.types[0].toUpperCase();
        const nameB = b.types[0].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
    return this.newArray;
  }

  handleClick(event) {
    const { selectPokemon } = this.props;
    const idName = event.target.id;
    const pokemonName = idName.split('-')[idName.split('-').length - 1];
    selectPokemon(pokemonName);
  }

  render() {
    const {
      filters, order, pokemons,
    } = this.props;
    return (
      <div className="page-container">
        <div className="pokemon-list">
          { this.startComponentRender()
            ? this.filterPokemon(pokemons.pokemons, filters, order).map(pokemon => (
              <Pokemon
                key={pokemon.name}
                pokemonObject={pokemon}
                handleClick={this.handleClick}
              />
            )) : (
              <div className="loader-container">
                <img src={loader} className="loading" alt="loader" />
                <span>Loading, please wait...</span>
                <span>
                  {Math.round((10000 * pokemons.pokemons.length) / 807.0) / 100}
                  %
                </span>
                <span className="load-bar-container">
                  <div
                    className="load-bar"
                    style={
                    {
                      width: `${Math.round((10000 * pokemons.pokemons.length) / 807.0) / 100}%`,
                    }
                  }
                  />
                </span>
              </div>
            )}
        </div>
      </div>
    );
  };
}

PokemonList.propTypes = {
  pokemons: PropTypes.shape({
    pokemons: PropTypes.array,
    pending: PropTypes.bool,
  }).isRequired,
  order: PropTypes.objectOf(PropTypes.string).isRequired,
  filters: PropTypes.objectOf(PropTypes.string).isRequired,
  searchPokemon: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.filters,
  order: state.order,
  pokemons: state.pokemons,
  selectedPokemon: state.selectedPokemon,
});

const mapDispatchToProps = dispatch => ({
  searchPokemon: index => dispatch(searchAPokemon(index)),
  selectPokemon: name => dispatch(changeSelectedPokemon(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

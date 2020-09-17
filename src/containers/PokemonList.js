import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { changeFilter, changeOrder, searchAPokemon } from '../actions/index';
import Pokemon from '../components/Pokemon';
import logo from '../logo.svg';
import loader from '../Pokeball.svg';
import Filter from '../components/PokemonFilter';
import { POKEMON_NAME, DEX_NUMBER, POKEMON_TYPE } from '../constants';

class PokemonList extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.startComponentRender = this.startComponentRender.bind(this);
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    const { searchPokemon } = this.props;
    for(let i = 1; i <= 807; i+=1) {
      searchPokemon(i);
    }
  }

  startComponentRender() {
    const { pokemons } = this.props;
    if (pokemons.pending) return false;
    return true;
  }

  handleClick(event) {
    this.element = event.target;
    while (!this.element.id.includes('pokemon-card-')) {
      this.element = this.element.parentElement;
    }
    if (this.element.className === 'pokemon-card') {
      this.element.className = 'pokemon-card-big';
      this.element.children[1].className = 'image-container-big';
      this.element.children[2].className = 'type-container-big';
      this.element.children[3].className = 'stats-container-big';
    } else if (this.element.className === 'pokemon-card-big') {
      this.element.className = 'pokemon-card';
      this.element.children[1].className = 'image-container';
      this.element.children[2].className = 'type-container';
      this.element.children[3].className = 'stats-container';
    }
  }

  handleChange() {
    const { changeFilter, changeOrder } = this.props;
    const pokemonName = document.getElementById('pokemon-name');
    const typesButton = document.getElementById('pokemon-type');
    const pokemonOrder = document.getElementById('pokemon-order');
    const newFilter = {
      type: typesButton.value,
      name: pokemonName.value,
    };
    const newOrder = {
      orderBy: pokemonOrder.value,
    };
    changeFilter(newFilter);
    changeOrder(newOrder);
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
      return this.newArray;
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

  render() {
    const {
      filters, order, pokemons,
    } = this.props;
    return (
      <div className="page-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Filter handleChange={this.handleChange} />
        </header>
        <div>
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
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

PokemonList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemons: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  order: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  filters: PropTypes.object.isRequired,
  changeFilter: PropTypes.func.isRequired,
  changeOrder: PropTypes.func.isRequired,
  searchPokemon: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.filters,
  order: state.order,
  pokemons: state.pokemons,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: objFilter => dispatch(changeFilter(objFilter)),
  changeOrder: order => dispatch(changeOrder(order)),
  searchPokemon: (index) => dispatch(searchAPokemon(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

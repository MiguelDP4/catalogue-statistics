import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { changeFilter, changeOrder, searchAllPokemon } from '../actions/index';
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

  componentWillMount() {
    const { searchPokemon } = this.props;
    searchPokemon();
  }

  startComponentRender() {
    const { pokemons } = this.props;
    console.log(pokemons.pending);
    if(pokemons.pending) return false;
    return true;
  }

  handleClick(event) {
    let element = event.target;
    while(!element.id.includes('pokemon-card-')) {
      element = element.parentElement;
    }
    if(element.className == 'pokemon-card') {
      element.className = 'pokemon-card-big';
      element.children[1].className = 'image-container-big';
      element.children[2].className = 'type-container-big';
      element.children[3].className = 'stats-container-big';
    } else if (element.className == 'pokemon-card-big'){
      element.className = 'pokemon-card';
      element.children[1].className = 'image-container';
      element.children[2].className = 'type-container';
      element.children[3].className = 'stats-container';
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
    }
    changeFilter(newFilter);
    changeOrder(newOrder);
  }

  filterPokemon(pokemonList, filters, order) {
    let newArray = [];
    if(pokemonList.length === 0) return newArray;
    if (filters.type !== 'all') {
      newArray = pokemonList.filter(pokemon => pokemon.types.includes(filters.type));
      newArray = newArray.filter(pokemon => pokemon.name.toLowerCase().includes(filters.name.toLowerCase()));
    } else {
      newArray = [...pokemonList]
      newArray = newArray.filter(pokemon => pokemon.name.toLowerCase().includes(filters.name.toLowerCase()));
    }
    if(order.orderBy === DEX_NUMBER) {
      return newArray;
    } else if(order.orderBy === POKEMON_NAME) {
      newArray.sort(function(a,b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if(order.orderBy === POKEMON_TYPE) {
      newArray.sort(function(a,b){
        let nameA = a.types[0].toUpperCase();
        let nameB = b.types[0].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
    return newArray;
  }

  render() {
    const { filters, order, pokemons, pending } = this.props;
    return (
      <div className='page-container'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Filter handleChange={this.handleChange} />
        </header>
        <div>
          <div className='pokemon-list'>
              { this.startComponentRender() ? 
                this.filterPokemon(pokemons.pokemons, filters, order).map(pokemon => (
                  <Pokemon 
                  key={pokemon.name}
                  pokemonObject={pokemon}
                  handleClick={this.handleClick}
                  />
                )) : <div className="loader-container">
                  <img src={loader} className="loading" alt="loader" />
                  <span>Loading, please wait...</span>
                </div>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
  order: state.order,
  pokemons: state.pokemons,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: objFilter => dispatch(changeFilter(objFilter)),
  changeOrder: order => dispatch(changeOrder(order)),
  searchPokemon: () => dispatch(searchAllPokemon()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
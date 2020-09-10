import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { changeFilter } from '../actions/index';
import Pokemon from '../components/Pokemon';
import logo from '../logo.svg';
import Filter from '../components/PokemonFilter';
import PokemonFilter from '../components/PokemonFilter';

class PokemonList extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    const { changeFilter } = this.props;
    const pokemonName = document.getElementById('pokemon-name');
    const typesButton = document.getElementById('pokemon-type');
    const newFilter = {
      type: typesButton.value,
      name: pokemonName.value,
    };
    changeFilter(newFilter);
  }

  filterPokemon(pokemonList, filters) {
    let newArray = [];
    if (filters.type !== 'all') {
      console.log(filters);
      newArray = pokemonList.filter(pokemon => pokemon.types.includes(filters.type));
      newArray = newArray.filter(pokemon => pokemon.name.toLowerCase().includes(filters.name.toLowerCase()));
    } else {
      newArray = [...pokemonList]
      newArray = newArray.filter(pokemon => pokemon.name.toLowerCase().includes(filters.name.toLowerCase()));
    }
    return newArray;
  }

  render() {
    const { filters } = this.props;
    return (
      <div className='page-container'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Filter handleChange={this.handleChange} />
        </header>
        <div>
          <div className='pokemon-list'>
              {this.filterPokemon(this.pokemonList, filters).map(pokemon => (
                <Pokemon 
                key={pokemon.name}
                pokemonObject={pokemon}
                handleClick={this.handleClick}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: objFilter => dispatch(changeFilter(objFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
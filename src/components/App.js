import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonList from '../containers/PokemonList';
import PokemonData from './PokemonData';
import Spinner from './Spinner';
import {
  searchAPokemon, changeFilter, changeOrder, changeSelectedPokemon,
} from '../actions/index';
import Header from './Header';

class App extends React.Component {
  constructor() {
    super();

    this.startListRender = this.startListRender.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handlePokemonClick = this.handlePokemonClick.bind(this);
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    const { searchPokemon } = this.props;
    for (let i = 1; i <= 807; i += 1) {
      searchPokemon(i);
    }
  }

  startListRender() {
    const { pokemons } = this.props;
    if (pokemons.pokemons.length < 807) return false;
    return true;
  }

  handleFilterChange() {
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

  handlePokemonClick(event) {
    const { selectPokemon } = this.props;
    const idName = event.target.id;
    const pokemonName = idName.split('-')[idName.split('-').length - 1];
    selectPokemon(pokemonName);
  }

  render() {
    const { filters, order, pokemons } = this.props;
    return (
      <Router>
        <div className="App">
          <Header handleChange={this.handleFilterChange} />
          {this.startListRender()
            ? (
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <PokemonList
                      handleClick={this.handlePokemonClick}
                      pokemons={pokemons.pokemons}
                      filters={filters}
                      order={order}
                    />
                  )}
                />
                <div>
                  {pokemons.pokemons.map(pokemon => (
                    <Route
                      key={`/${pokemon.name}-card-link`}
                      path={`/${pokemon.name}`}
                      render={() => (
                        <PokemonData
                          pokemonObject={pokemon}
                        />
                      )}
                    />
                  ))}

                </div>

              </Switch>
            )
            : <Spinner pokemons={pokemons.pokemons} /> }

        </div>
      </Router>
    );
  }
}

App.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  changeOrder: PropTypes.func.isRequired,
  pokemons: PropTypes.shape({
    pokemons: PropTypes.arrayOf(PropTypes.shape({
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
      pokemonName: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })),
    pending: PropTypes.bool,
  }).isRequired,
  order: PropTypes.objectOf(PropTypes.string).isRequired,
  filters: PropTypes.objectOf(PropTypes.string).isRequired,
  searchPokemon: PropTypes.func.isRequired,
  selectPokemon: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.filters,
  order: state.order,
  pokemons: state.pokemons,
  selectedPokemon: state.selectedPokemon,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: objFilter => dispatch(changeFilter(objFilter)),
  changeOrder: order => dispatch(changeOrder(order)),
  searchPokemon: index => dispatch(searchAPokemon(index)),
  selectPokemon: name => dispatch(changeSelectedPokemon(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

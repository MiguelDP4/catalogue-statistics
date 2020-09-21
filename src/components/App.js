import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import PokemonList from '../containers/PokemonList';
import PokemonData from '../components/PokemonData';
import { changeFilter, changeOrder } from '../actions/index';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();

    this.handleFilterChange = this.handleFilterChange.bind(this);

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

  render () {
    return (
    <Router>
      <div className="App">
        <Header handleChange={this.handleFilterChange} />
        <Switch>
          <Route path="/" exact component={PokemonList} />
          <Route path="/data" component={PokemonData} />
        </Switch>
      </div>
    </Router>
    );
  };
}

App.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  changeOrder: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.filters,
  order: state.order,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: objFilter => dispatch(changeFilter(objFilter)),
  changeOrder: order => dispatch(changeOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
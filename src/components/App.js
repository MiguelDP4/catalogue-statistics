import React from 'react';
import PokemonList from '../containers/PokemonList';
import PokemonData from '../components/PokemonData';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={PokemonList} />
          <Route path="/data" component={PokemonData} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

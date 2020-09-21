import React from 'react';
import Filter from '../components/PokemonFilter';
import logo from '../logo.svg';

const Header = props => {
  const { handleChange } = props;
  return (<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Filter handleChange={handleChange} />
  </header>)
}

export default Header;
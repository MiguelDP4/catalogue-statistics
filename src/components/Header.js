import React from 'react';
import { Link } from 'react-router-dom';
import Filter from './PokemonFilter';
import logo from '../logo.svg';

const Header = props => {
  const { handleChange } = props;
  return (
    <header className="App-header">
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
      <Filter handleChange={handleChange} />
    </header>
  );
};

export default Header;

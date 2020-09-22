import React from 'react';
import Filter from '../components/PokemonFilter';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Header = props => {
  const { handleChange } = props;
  return (<header className="App-header">
    <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
    <Filter handleChange={handleChange} />
  </header>)
}

export default Header;
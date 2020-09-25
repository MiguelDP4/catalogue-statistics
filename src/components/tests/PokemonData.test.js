import { mount, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import PokemonData from '../PokemonData';

configure({ adapter: new Adapter() });

describe('Test PokemonData container', () => {
  const pokemon = {
    id: 91,
    name: 'cloyster',
    types: Array(2),
    stats: {
      attack: 82,
      defense: 83,
      hp: 80,
      specialattack: 100,
      specialdefense: 100,
      speed: 80,
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <PokemonData
          pokemonObject={pokemon}
        />
      </Router>,
    );
  });
  it('should have two images, one for the pokemon and other for the exit icon', () => {
    expect(wrapper.find('img')).toHaveLength(2);
  });

  it('should have a type container tag', () => {
    expect(wrapper.find('.type-container-big')).toHaveLength(1);
  });

  it('should have a stats container tag', () => {
    expect(wrapper.find('.stats-container-big')).toHaveLength(1);
  });

  it('should have six different stats', () => {
    expect(wrapper.find('.stat-name')).toHaveLength(6);
  });
});

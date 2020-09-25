import { mount, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import Pokemon from '../Pokemon';

configure({ adapter: new Adapter() });

describe('Test Pokemon component', () => {
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
        <Pokemon
          key={pokemon.name}
          pokemonObject={pokemon}
        />
      </Router>,
    );
  });
  it('should have one image', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('should have a type container tag', () => {
    expect(wrapper.find('.type-container')).toHaveLength(1);
  });
});

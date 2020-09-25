import { mount, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import Filter from '../Header';

configure({ adapter: new Adapter() });

describe('Test PokemonFilter component', () => {
  let wrapper;
  const mockHandleChange = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <Filter
          handleChange={mockHandleChange}
        />
      </Router>,
    );
  });
  it('should have two select tags', () => {
    expect(wrapper.find('select')).toHaveLength(2);
  });

  it('makes sure first select should have 19 options', () => {
    expect(wrapper.find('#pokemon-type').children()).toHaveLength(19);
  });

  it('makes sure first select should have 3 options', () => {
    expect(wrapper.find('#pokemon-order').children()).toHaveLength(3);
  });
});

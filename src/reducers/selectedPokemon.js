import { CHANGE_POKEMON } from '../constants';

const changePokemon = (state, action) => action.pokemon;

function selectedPokemon(state = '', action = '') {
  switch (action.type) {
    case CHANGE_POKEMON:
      return changePokemon(state, action);
    default:
      return state;
  }
}

export default selectedPokemon;

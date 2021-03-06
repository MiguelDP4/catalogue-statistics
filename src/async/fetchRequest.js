import pokeball from '../logo.svg';
const fetchRequest = async request => {
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}, request: ${request}`);
  } else {
    return response;
  }
};

const searchPokemon = async dexNumber => {
  const foundPokemon = {};
  await fetchRequest(`https://pokeapi.co/api/v2/pokemon/${dexNumber}`).then(data => data.json())
    .then(pokemon => {
      foundPokemon.id = pokemon.id;
      foundPokemon.name = pokemon.name;
      const type1 = pokemon.types[0].type.name;
      let type2 = '';
      if (pokemon.types[1]) type2 = pokemon.types[1].type.name;
      foundPokemon.types = [type1, type2];
      if (pokemon.stats.length >= 6) {
        foundPokemon.stats = {
          hp: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defense: pokemon.stats[2].base_stat,
          specialattack: pokemon.stats[3].base_stat,
          specialdefense: pokemon.stats[4].base_stat,
          speed: pokemon.stats[5].base_stat,
        };
      } else {
        foundPokemon.stats = {
          hp: 0,
          attack: 0,
          defense: 0,
          specialattack: 0,
          specialdefense: 0,
          speed: 0,
        };
      }
      foundPokemon.image = pokemon.sprites.front_default;
    })
    .catch(pokemon => {
      foundPokemon.id = "not found";
      foundPokemon.name = "not found";
      foundPokemon.types = ["not found", "not found"];
      foundPokemon.stats = {
        hp: "not found",
        attack: "not found",
        defense: "not found",
        specialattack: "not found",
        specialdefense: "not found",
        speed: "not found",
      };
      foundPokemon.image = pokeball;
    });
  return foundPokemon;
};

export default searchPokemon;

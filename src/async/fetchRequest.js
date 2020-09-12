async function fetchRequest(request) {
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response;
  }
}

async function searchPokemon(dexNumber) {
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
    });
  return foundPokemon;
}

async function searchAllPokemon() {
  let allPokemon = [];
  for (let i = 1; i <= 807; i++) {
    allPokemon = [...allPokemon, await searchPokemon(i)];
  }
  return allPokemon;
}

export default searchAllPokemon;

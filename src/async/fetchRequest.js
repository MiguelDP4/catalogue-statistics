async function fetchRequest(request) {
  let response = await fetch(request);
  if(!response.ok) {
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
    foundPokemon.types = [pokemon.types[0], pokemon.types[1]];
    foundPokemon.stats = pokemon.stats;
    foundPokemon.stats = {
      "hp": pokemon.stats[0].base_stat,
      "attack": pokemon.stats[1].base_stat,
      "defense": pokemon.stats[2].base_stat,
      "specialattack": pokemon.stats[3].base_stat,
      "specialdefense": pokemon.stats[4].base_stat,
      "speed": pokemon.stats[5].base_stat,
    };
    foundPokemon.image = pokemon.sprites.front_default
    });
    return foundPokemon;
}

async function searchAllPokemon() {
  let allPokemon = [];
  for(let i = 1; i <= 10; i++) {
    allPokemon = [...allPokemon, await searchPokemon(i)];
  }
  return allPokemon;
}

export default searchAllPokemon;
const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetails){
  const pokemon = new Pokemon()
  pokemon.number = pokeDetails.order
  pokemon.name = pokeDetails.name

  const types =  pokeDetails.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types
  
  pokemon.type = type
  pokemon.types = types

  pokemon.photo = pokeDetails.sprites.other.dream_world.front_default

  return pokemon
}

pokeApi.getPokemonDetail = (pokemon) =>{
  return fetch (pokemon.url)
  .then((response) => response.json())
  .then (convertPokeApiDetailToPokemon)
}



pokeApi.getPokemons = (offset = 0, limit = 20) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    .catch((error) => console.error(error));
}




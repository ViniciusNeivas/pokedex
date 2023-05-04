function convertPokemonToLi(pokemon){
  return `
    <li class="pokemon ${pokemon.type}">
                <span class="number-pokedex">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span> 
                <section class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </section>
            </li>
    `;
}

const pokemonList = document.getElementById("pokemon-list");
pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join("");
});
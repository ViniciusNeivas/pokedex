function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
                <span class="number-pokedex">#001</span>
                <span class="name">${pokemon.name}</span> 

                <section class="detail">
                    <ol class="types">
                        <li class="type">
                            Grass
                        </li>
                        <li class="type">
                            Poison
                        </li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </section>
            </li>
    `;
}

const pokemonList = document.getElementById("pokemon-list");
pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join("");
 
});
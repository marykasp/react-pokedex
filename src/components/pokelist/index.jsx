import PokemonCard from "../pokecard";
import "./pokelist.css";

const PokeList = ({ pokemons }) => {
  return (
    <div className="pokemon-container">
      <div className="all-container">
        {pokemons.map((pokemon, idx) => (
          <PokemonCard
            key={`${pokemon.id}-${idx}`}
            id={pokemon.id.toString()}
            image={pokemon.sprites.other["official-artwork"].front_default}
            name={pokemon.name.replace(/^./, (str) => str.toUpperCase())}
            type={pokemon.types[0].type.name}
            // get an array of base stats and then return first 3
            stats={pokemon.stats.map((stat) => stat.base_stat).slice(0, 3)}
            statsName={pokemon.stats.map((stat) => stat.stat.name).slice(0, 3)}
            pokemonStats={pokemon}
          />
        ))}
      </div>
    </div>
  );
};

export default PokeList;

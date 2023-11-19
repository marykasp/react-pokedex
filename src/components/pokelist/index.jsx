import { useEffect, useState } from "react";
import PokemonCard from "../pokecard";
import "./pokelist.css";

const PokeList = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0",
    );
    // array of objects with pokemon name and url
    const data = await res.json();

    // fetches each pokemon's specific info, iterates over results of all pokemon and adds pokemon object to allPokemons array
    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        );
        const pokemonData = await res.json();
        // need to use prevState since this is inside a forEach loop so the state is ot yet set
        setAllPokemons((currentList) => [...currentList, pokemonData]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }

    createPokemonObject(data.results);
  };

  // side effect that synchronizes component with external library - fetches data
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemon, idx) => (
            <PokemonCard
              key={`${pokemon.id}-${idx}`}
              id={pokemon.id.toString()}
              image={pokemon.sprites.other["official-artwork"].front_default}
              name={pokemon.name.replace(/^./, (str) => str.toUpperCase())}
              type={pokemon.types[0].type.name}
              // get an array of base stats and then return first 3
              stats={pokemon.stats.map((stat) => stat.base_stat).slice(0, 3)}
              statsName={pokemon.stats
                .map((stat) => stat.stat.name)
                .slice(0, 3)}
              pokemonStats={pokemon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeList;

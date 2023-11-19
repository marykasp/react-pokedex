import { useEffect, useState } from "react";
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
    <div>
      {allPokemons.map((pokemon) => {
        return <p>{pokemon.name}</p>;
      })}
    </div>
  );
};

export default PokeList;

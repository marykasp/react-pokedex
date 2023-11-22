import Topbar from "../../sections/topbar";
import PokeList from "../../components/pokelist";
import Bottombar from "../../sections/bottombar";
import { useState, useEffect } from "react";

const Pokemon = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const newQuery = e.target.value.toLowerCase().trim();
    setSearchQuery(newQuery);
    const filteredPokemon = allPokemons.filter((pokemon) =>
      pokemon.name.includes(newQuery),
    );
    setFilteredPokemon(filteredPokemon);
  };

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
        // update the filtered Pokemon state to have when component initially renders
        setFilteredPokemon((currentList) => [...currentList, pokemonData]);
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
    <>
      <Topbar handleSearch={handleSearch} query={searchQuery} />
      <PokeList pokemons={filteredPokemon} />
      <Bottombar />
    </>
  );
};

export default Pokemon;

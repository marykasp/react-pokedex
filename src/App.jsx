import PokeList from "./components/pokelist";
import Bottombar from "./sections/bottombar";
import Topbar from "./sections/topbar";
import { useState, useEffect } from "react";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    console.log(query);
    setSearchQuery(query);
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
      <PokeList pokemons={allPokemons} />
      <Bottombar />
    </>
  );
}

export default App;

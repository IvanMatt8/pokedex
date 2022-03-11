import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchbar/SearchBar";
import "./App.css";
import Pokedex from "./components/pokedex/Pokedex";
import { getPokemonData, getPokemons } from "./api/api";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      alert("fetchPokemon Error", error);
    }
  };

  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, []);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;

import React from "react";
import { useSearch } from "../../context/searchContext";
import Loarder from "../loader/Loader";
import Pagination from "../pagination/Pagination";
import Pokemon from "../pokemon/Pokemon";
import "./Pokedex.css";

function Pokedex() {
  const { pokemons, loading } = useSearch();

  return (
    <div className="pokedexContent">
      <div className="pokedexHeader">
        <h1>Pokedex</h1>
        <Pagination />
      </div>

      {loading ? (
        <Loarder className="loader" />
      ) : (
        <div className="pokedexGrid">
          {pokemons &&
            pokemons.map((pokemon, index) => (
              <Pokemon key={index} pokemon={pokemon} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Pokedex;

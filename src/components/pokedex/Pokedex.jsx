import React from "react";
import Pokemon from "../pokemon/Pokemon";
import "./Pokedex.css";

function Pokedex({ pokemons, loading }) {
  console.log(pokemons);
  return (
    <div className="pokedexContent">
      <div className="pokedexHeader">
        <h1>Pokedex</h1>
        <div>Paginação</div>
      </div>
      {loading ? (
        <div>Carregando, um minuto...</div>
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

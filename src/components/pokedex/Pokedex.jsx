import React from "react";
import Pagination from "../pagination/Pagination";
import Pokemon from "../pokemon/Pokemon";
import "./Pokedex.css";

function Pokedex({ pokemons, loading, page, totalPages, setPage }) {
  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="pokedexContent">
      <div className="pokedexHeader">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
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

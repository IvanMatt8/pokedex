import React, { useContext } from "react";
import FavoriteContext from "../../context/favoritesContext";
import "./Pokemon.css";

function Pokemon({ pokemon }) {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const onHeartCLick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";

  return (
    <div className="pokemonCard">
      <div className="pokemonImageContent">
        <img
          className="pokemonImage"
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
        />
      </div>
      <div className="cardBody">
        <div className="cardTop">
          <h3>{pokemon.name}</h3>
          <h3>#{pokemon.id}</h3>
        </div>
        <div className="cardBottom">
          <div className="pokemonType">
            {pokemon.types.map((type, index) => (
              <div key={index} className="pokemonTypeText">
                {type.type.name}
              </div>
            ))}
          </div>
          <button className="pokemonHeaderBtn" onClick={onHeartCLick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;

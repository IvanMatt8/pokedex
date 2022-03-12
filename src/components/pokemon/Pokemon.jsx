import React, { useContext } from "react";
import FavoriteContext from "../../context/favoritesContext";
import Icon, { IconName } from "../icon/Icon";
import "./Pokemon.css";

function Pokemon({ pokemon }) {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const onHeartCLick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const heart = favoritePokemons.includes(pokemon.name)
    ? IconName.heartLike
    : IconName.heartUnLike;

  return (
    <div className="pokemonCard">
      <div className="cardBody">
        <div className="idPokemon">
          <h3>N° {pokemon.id}</h3>
        </div>
        <div className="cardTop">
          <div className="pokemonImageContent">
            <img
              className="pokemonImage"
              alt={pokemon.name}
              src={pokemon.sprites.front_default}
            />
          </div>
          <h3>{pokemon.name}</h3>
        </div>
        <div className="cardBottom">
          <div className="pokemonType">
            {pokemon.types.map((type, index) => (
              <div key={index} className="pokemonTypeText">
                {type.type.name}
              </div>
            ))}
          </div>
          <Icon
            onClick={onHeartCLick}
            iconName={heart}
            className="pokemonHeaderBtn"
          />
        </div>
      </div>
    </div>
  );
}

export default Pokemon;

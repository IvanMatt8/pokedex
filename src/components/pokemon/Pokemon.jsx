import React from "react";
import "./Pokemon.css";

function Pokemon({ pokemon }) {
  const onHeartCLick = () => {
    console.log("pode favoritar");
  };

  const heart = "❤️";

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

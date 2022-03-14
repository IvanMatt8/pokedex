import React, { useContext } from "react";
import FavoriteContext from "../../context/favoritesContext";
import Pokemon from "../../assets/pokemon.png";
import Charizard from "../../assets/charizard.png";
import Lugia from "../../assets/lugia.png";
import "./Navbar.css";

function Navbar() {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <nav>
      <div className="iconeCapa">
        <img src={Pokemon} alt="logoPokemon"></img>
      </div>
      <div>
        <img
          className="charizardCapa"
          src={Charizard}
          alt="logoCharizard"
        ></img>
        <img className="lugiaCapa" src={Lugia} alt="logoLugia"></img>
      </div>
    </nav>
  );
}

export default Navbar;

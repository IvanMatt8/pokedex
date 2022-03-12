import React, { useContext } from "react";
import FavoriteContext from "../../context/favoritesContext";
import "./Navbar.css";

function Navbar() {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <img className="navbarImg" src={logoImg} alt="pokeApi"></img>
      </div>
      <div>{favoritePokemons.length}❤️</div>
    </nav>
  );
}

export default Navbar;

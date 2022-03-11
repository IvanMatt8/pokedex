import React from "react";
import "./Navbar.css";

function Navbar() {
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <img className="navbarImg" src={logoImg} alt="pokeApi"></img>
    </nav>
  );
}

export default Navbar;

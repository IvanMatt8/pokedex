import React from "react";
import "./Navbar.css";

function Navbar() {
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <img className="navbarImg" src={logoImg} alt="pokeApi"></img>
      </div>
      <div>❤️</div>
    </nav>
  );
}

export default Navbar;

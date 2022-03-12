import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchbar/SearchBar";
import "./App.css";
import Pokedex from "./components/pokedex/Pokedex";
import { FavoriteProvider } from "./context/favoritesContext";
import { useSearch } from "./context/searchContext";

const favoritesKey = "f";

function App() {
  const { notFound } = useSearch();
  const [favorites, setFavorites] = useState([]);

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
        <Navbar />
        <SearchBar />
        {notFound ? (
          <div className="not-found-text"> meteu essa ? </div>
        ) : (
          <Pokedex />
        )}
      </div>
    </FavoriteProvider>
  );
}

export default App;

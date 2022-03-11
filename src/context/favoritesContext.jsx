import React from "react";

const FavoriteContext = React.createContext({
  favoretePokemons: [],
  updateFavoritePokemons: (id) => null,
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;

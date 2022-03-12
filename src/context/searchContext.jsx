import React, { createContext, useState, useEffect, useContext } from "react";
import { getPokemonData, searchPokemon, getPokemons } from "../api/api";

const SearchContext = createContext(null);

export function SearchContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState();
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState();
  const [search, setSearch] = useState("dito");

  const ITENS_PER_PAGE = 25;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(ITENS_PER_PAGE, ITENS_PER_PAGE * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / ITENS_PER_PAGE));
    } catch (error) {
      alert("fetchPokemon Error", error);
    }
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setLoading(false);
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, [page, search]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.lenght === 0) {
      onSearchHandler(undefined);
    }
  };
  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

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
    <SearchContext.Provider
      value={{
        loading,
        notFound,
        pokemons,
        page,
        totalPages,
        search,
        onChangeHandler,
        onButtonClickHandler,
        onLeftClickHandler,
        onRightClickHandler,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  return context;
}

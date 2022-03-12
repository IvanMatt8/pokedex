import React from "react";
import { useSearch } from "../../context/searchContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { onChangeHandler, onButtonClickHandler } = useSearch();
  return (
    <div className="sarchBarContainer">
      <div className="sarchBar">
        <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchBarButton">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;

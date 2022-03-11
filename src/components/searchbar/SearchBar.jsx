import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("dito");
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    console.log("pokemon", search);
  };

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

import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchbar/SearchBar";
import { searchPokemon } from "./api/api";
import "./App.css";

function App() {
  const onSearchHandler = (pokemon) => {};
  return (
    <div>
      <Navbar />
      <SearchBar onSearch={onSearchHandler} />
      <div className="App"></div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  axios.get("http://localhost:3001").then((response) => {
    console.log(response.data);
  });

  function getRecipe() {}

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <p>Seperate ingredients with comma</p>
      <form>
        <input type="text" id="searchInput" placeholder="Enter ingredients" />
        <button type="submit" onClick={getRecipe()}>
          Search
        </button>
      </form>
      <div className="output">
        Recipies: <span id="result"></span>
      </div>
    </div>
  );
}

export default App;

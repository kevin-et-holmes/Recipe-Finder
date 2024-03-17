import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  axios.get("/").then((response) => {
    //console.log(response.data);
  });

  const [recipes, setRecipes] = useState(["test", "test2", "test3"]);

  function recipesList() {
    const id = recipes.data;
    return recipes.map((n) => <li key={n}>{n.recipe}</li>);
    console.log(recipes);
  }

  function getRecipes() {
    //let ingredients = document.getElementById("searchInput").value;
    axios.get(`http://localhost:3001/recipes/`).then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    });
  }

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <p>Seperate ingredients with comma</p>
      <form>
        <input type="text" id="searchInput" placeholder="Enter ingredients" />
      </form>
      <button onClick={getRecipes}>Search</button>
      <div className="output">
        Recipies: <span id="result"></span>
        <ul id="recipes">{recipesList()}</ul>
      </div>
    </div>
  );
}

export default App;

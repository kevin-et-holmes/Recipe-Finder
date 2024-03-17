import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  axios.get("/").then((response) => {
    //console.log(response.data);
  });

  const [recipes, setRecipes] = useState(["test", "test2", "test3"]);

  const mappedRecipes = recipes.map((recipe, index) => {
    return <li key={index}>{recipe.recipe}</li>;
  });

  function getRecipes() {
    let ingredients = document.getElementById("searchInput").value;
    //ingredients = ingredients.toString().split(",");

    axios
      .post(`/recipes/`, { ingredients: ingredients })
      .then((response) => {
        //console.log(response.data);
        setRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
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
        Recipes: <span id="result"></span>
        <ul id="recipes">{mappedRecipes}</ul>
      </div>
    </div>
  );
}

export default App;

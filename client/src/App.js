import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  axios.get("/").then((response) => {
    //console.log(response.data);
  });

  const [recipes, setRecipes] = useState([]);

  const mappedRecipes = recipes.map((recipe, index) => {
    const ingredients = recipe.ingredients.toString().split(",");
    return (
      <div id="recipe" key={index}>
        <h2>{recipe.recipe}</h2>
        <p id="ingredients">Ingredients: {ingredients.join(", ")}</p>
      </div>
    );
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

  function addRecipe() {
    let recipe = document.getElementById("recipeInput").value;
    let ingredients = document.getElementById("ingredientsInput").value;
    ingredients = ingredients.toString().split(",");

    axios
      .post(`/add-recipe/`, { recipe: recipe, ingredients: ingredients })
      .then((response) => {
        //console.log(response.data);
        setRecipes([...recipes, response.data]);
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
      <button id="searchButton" onClick={getRecipes}>
        Search
      </button>
      <div className="output">
        <h4>Recipes:</h4>
        <div className="recipeList">{mappedRecipes}</div>
      </div>
      <hr className="solid" />
      <h3>Add Recipe</h3>
      <form id="addRecipeForm">
        <input type="text" id="recipeInput" placeholder="Enter recipe" />
        <input
          type="text"
          id="ingredientsInput"
          placeholder="Enter ingredients"
        />
        <button id="addRecipeButton" onClick={addRecipe}>
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default App;

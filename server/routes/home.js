const router = require("express").Router();
const mongoose = require("mongoose");
const db = mongoose.connection;
const recipes = require("../Schema/recipes-schema");
//const recipes = ["test4", "test5", "test6"];

router.post("/recipes", async (req, res) => {
  //let ingredients = [];
  try {
    let ingredients = req.body.ingredients.split(",").map((ingredient) => {
      return ingredient.trim();
    });
    //console.log("ingredients: ", req.body.ingredients);
    let recipesData = await recipes.find({
      ingredients: { $in: ingredients },
    });
    //console.log("data: ", recipesData);
    let recipeDataSorted = recipesData.sort((a, b) => {
      return (
        b.ingredients.filter((ingredient) => ingredients.includes(ingredient))
          .length -
        a.ingredients.filter((ingredient) => ingredients.includes(ingredient))
          .length
      );
    });
    //console.log("data sorted: ", recipeDataSorted);
    res.json(recipeDataSorted);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/add-recipe", async (req, res) => {
  try {
    console.log("req.body: ", req.body);
    db.collection("recipes").insertOne(req.body);
    res.json(201);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

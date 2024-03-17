const router = require("express").Router();
const mongoose = require("mongoose");
const db = mongoose.connection;
const recipes = require("../Schema/recipes-schema");
//const recipes = ["test4", "test5", "test6"];

router.post("/recipes", async (req, res) => {
  //let ingredients = [];
  try {
    let ingredients = req.body.ingredients.split(",");
    let recipesData = await recipes.find({
      ingredients: { $in: ingredients },
    });
    let recipeDataSorted = recipesData.sort((a, b) => {
      return (
        b.ingredients.filter((ingredient) => ingredients.includes(ingredient))
          .length -
        a.ingredients.filter((ingredient) => ingredients.includes(ingredient))
          .length
      );
    });
    console.log("data: ", recipeDataSorted);
    res.json(recipeDataSorted);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

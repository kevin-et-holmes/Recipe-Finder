const router = require("express").Router();
const mongoose = require("mongoose");
const db = mongoose.connection;
const recipes = require("../Schema/recipes-schema");
//const recipes = ["test4", "test5", "test6"];

router.post("/recipes", async (req, res) => {
  //let ingredients = [];
  try {
    let ingredients = req.body.ingredients.split(",");
    const recipesData = await recipes.find({
      ingredients: { $in: ingredients },
    });
    console.log(recipesData);
    res.json(recipesData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

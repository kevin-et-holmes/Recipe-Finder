const router = require("express").Router();
const mongoose = require("mongoose");
const db = mongoose.connection;
const recipes = require("../Schema/recipes-schema");
//const recipes = ["test4", "test5", "test6"];

router.get("/recipes", async (req, res) => {
  try {
    const recipesData = await recipes.find({ recipe: "beef tacos" });
    res.json(recipesData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

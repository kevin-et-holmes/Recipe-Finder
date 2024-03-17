const mongoose = require("mongoose");

const recipes = mongoose.Schema({
  recipe: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("recipes", recipes);

const mongoose = require("mongoose");

const recipesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Recipes", recipesSchema);

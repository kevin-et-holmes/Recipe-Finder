const router = require("express").Router();
const recipes = ["test4", "test5", "test6"];

router.get("/recipes", async (req, res) => {
  try {
    res.json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

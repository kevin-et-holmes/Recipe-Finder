const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    return res.json("Welcome to the home page!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

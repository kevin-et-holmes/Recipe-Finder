const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
require("dotenv").config();

app.use("/", require("./routes/index"));

mongoose.connect(process.env.MONGODB_URI, {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

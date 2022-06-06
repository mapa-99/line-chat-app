const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://admin:fd3K!-G6tv3mG9N@line-chat-db.jhyon.mongodb.net/?retryWrites=true&w=majority`
);

const app = express();
app.get("/", (req, res) => {
  res.send("Hi, my name is Chiki!");
});
app.listen(3001, () => {
  console.log("Server has started at port 3001!");
});

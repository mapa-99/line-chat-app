const express = require("express");
const mongoose = require("mongoose");
const http = require('http')
const cors = require('cors')
const socketio = require('socket.io')

const PORT = process.env.PORT || 5000

const app = express();

const server = http.createServer(app)
mongoose.connect(
  `mongodb+srv://admin:fd3K!-G6tv3mG9N@line-chat-db.jhyon.mongodb.net/?retryWrites=true&w=majority`

);


app.get("/", (req, res) => {
  res.send("Hi, my name is Chiki!");
});
server.listen(PORT, () => {
  console.log('Server is up and running on port ' + PORT);
});

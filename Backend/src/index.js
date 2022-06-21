const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const socketio = require("socket.io");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());

const server = http.createServer(app);

//Real time data functionality
const io = socketio(server, { wsEngine: "ws" });

io.on("connection", (socket) => {
  //The user join the room
  socket.on("join", (data) => {
    const { name, room } = data;
    const { user, error } = addUser({ id: socket.id, name, room });

    if (error) return;
    socket.emit("message", {
      user: "admin",
      text: `${user.name}, it's great to see you in here.`,
    });
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} has just landed to the room.`,
    });
    socket.join(user.room);
    io.to(user.room).emit("room-data", {
      room: user.room,
      users: getAllUsers(user.room),
    });
  });

  //The user left the room
  socket.on("left", () => {
    const user = removeUser(socket.id);
    user &&
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has just left!`,
      });
  });
  
  //The user send a message
  socket.on("send-message", (message) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", {
      user: user.name,
      text: message,
    });
    io.to(user.room).emit("room-data", {
      room: user.room,
      users: getAllUsers(user.room),
    });
  });
});

//Connect to DB
mongoose.connect(
  `mongodb+srv://admin:fd3K!-G6tv3mG9N@line-chat-db.jhyon.mongodb.net/?retryWrites=true&w=majority`
);

app.get("/", (req, res) => {
  res.send("It's working!");
});
server.listen(PORT, () => {
  console.log("Server is up and running on port " + PORT);
});

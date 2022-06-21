import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import ChatView from "../components/ChatView";
import Info from "../components/Info";
import { END_POINT } from "../constants";
let socket;

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const location = useLocation();

  useEffect(() => {
    socket = io(END_POINT);
    socket.emit("join", { name, room });
    return () => {
      socket.emit("left");
      socket.off();
    };
  }, [END_POINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => setMessages([...messages, message]));
    socket.on("room-data", ({ users }) => setUsers(users));
  });

  return (
    <main>
      <Info room={room} users={users} />
      <ChatView messages={messages} name={name} room={room} />
    </main>
  );
};

export default Chat;

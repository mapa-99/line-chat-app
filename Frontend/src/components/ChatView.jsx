import React from "react";
import { useForm } from "react-hook-form";
import { io, Socket } from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatView = ({ messages, name, room }) => {
  const { register, handleSubmit, reset, socket } = useForm();
  const sendMessage = ({ message }) => {
    message && socket.emit("send-message", message);
    reset();
  };
  return (
    <section>
      <ScrollToBottom>
        {messages.map((message, i) => (
          <li key={i}>
            <span>{message.user}</span>
            <p>{message.text}</p>
          </li>
        ))}
      </ScrollToBottom>
      <form>
        <input type="text" {...register("messagge", { required: true })} />
        <button type="submit"> send</button>
      </form>
    </section>
  );
};

export default ChatView;

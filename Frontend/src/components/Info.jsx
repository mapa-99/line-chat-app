import React from "react";
import { Link } from "react-router-dom";

const Info = ({ room, users }) => {
  return (
    <section>
      <header>
        <h2>{room}</h2>
      </header>
      <ul>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
      <footer>
        <Link to="/">
          <button>Leave Room!</button>
        </Link>
      </footer>
    </section>
  );
};

export default Info;

import React from "react";
import WelcomeMessage from "../components/Welcome/WelcomeMessage";
import "../styles/welcome.css";
const Register = () => {
  return (
    <div className="welcome">
      <div className="welcomeWrapper">
        <WelcomeMessage />
        <div className="welcomeRight">
          <form className="welcomeBox" /* onSubmit={handleClick} */>
            <input placeholder="Username" required className="welcomeInput" />
            <input
              placeholder="Email"
              type="email"
              required
              className="welcomeInput"
              //   ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="welcomeInput"
              //   ref={password}
            />
            <input
              placeholder="password again"
              type="password"
              className="welcomeInput"
              required
            />
            <button className="welcomeButton" type="submit">
              Registrarme!
            </button>

            <button className="welcomeRegisterButton">
              Ya tengo una cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

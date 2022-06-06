import React from "react";
import WelcomeMessage from "../components/Welcome/WelcomeMessage";
import "../styles/welcome.css";
const Login = () => {
  return (
    <div className="welcome">
      <div className="welcomeWrapper">
        <WelcomeMessage />
        <div className="welcomeRight">
          <form className="welcomeBox" /* onSubmit={handleClick} */>
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
            <button
              className="welcomeButton"
              type="submit" /* disabled={isFetching} */
            >
                Ingresar!
              {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )} */}
            </button>
            <span className="welcomeForgot">Forgot Password?</span>
            <button className="welcomeRegisterButton">
              Deseo registrarme
              {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )} */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

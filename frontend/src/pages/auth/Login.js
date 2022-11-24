import React from "react";
import "./login.style.scss";

const Login = () => {
  return (
    <div className="login_container">
      <div className="form">
        <div className="form__header">LOGIN</div>
        <div className="form__body">
          <form>
            <input type="email" placeholder="Email" className="form__input" />
            <input
              type="password"
              placeholder="Password"
              className="form__input"
            />
            <button type="submit" className="form__button">
              Login
            </button>
          </form>

          <div className="form__footer">
            <a href="/">Home</a>
            <a href="/forgot">Forgot Password</a>
            <a href="/register">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

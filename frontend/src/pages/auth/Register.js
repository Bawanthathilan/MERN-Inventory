import React from "react";
import "./register.style.scss";

const Register = () => {
  return (
    <div className="register_container">
      <div className="form">
        <div className="form__header">REGISTER</div>
        <div className="form__body">
          <form>
            <input type="text" placeholder="Name" className="form__input" />
            <input type="email" placeholder="Email" className="form__input" />
            <input
              type="password"
              placeholder="Password"
              className="form__input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="form__input"
            />
            <button type="submit" className="form__button">
              Register
            </button>
          </form>

          <div className="form__footer">
            <a href="/">Home</a>
            <a href="/forgot">Forgot Password</a>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

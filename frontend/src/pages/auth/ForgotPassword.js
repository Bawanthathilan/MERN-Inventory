import React from "react";
import "./forgotpassword.style.scss";

const ForgotPassword = () => {
  return (
    <div className="forgotpassword_container">
      <div className="form">
        <div className="form__header">FORGOT PASSWORD</div>
        <div className="form__body">
          <form>
            <input type="email" placeholder="Email" className="form__input" />

            <button type="submit" className="form__button">
              Get Reset Email
            </button>
          </form>

          <div className="form__footer">
            <a href="/">Home</a>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

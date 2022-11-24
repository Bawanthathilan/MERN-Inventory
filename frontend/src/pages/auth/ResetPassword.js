import React from "react";
import "./resetPassword.style.scss";

const ResetPassword = () => {
  return (
    <div className="resetpassword_container">
      <div className="form">
        <div className="form__header">RESET PASSWORD</div>
        <div className="form__body">
          <form>
            <input
              type="password"
              placeholder="New Password"
              className="form__input"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="form__input"
            />

            <button type="submit" className="form__button">
              Reset Password
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

export default ResetPassword;

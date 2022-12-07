import React, { useState } from "react";
import "./forgotpassword.style.scss";
import { validateEmail, forgotPassword } from "../../services/authService";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const forgot = async (e) => {
    e.preventDefault();

    if (!email) return toast.error("Email is required");

    if (!validateEmail(email)) {
      return toast.error("Invalid email");
    }

    const userData = {
      email,
    };

    await forgotPassword(userData);
    setEmail("");
  };

  return (
    <div className="forgotpassword_container">
      <div className="form">
        <div className="form__header">FORGOT PASSWORD</div>
        <div className="form__body">
          <form onSubmit={forgot}>
            <input
              type="email"
              placeholder="Email"
              className="form__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

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

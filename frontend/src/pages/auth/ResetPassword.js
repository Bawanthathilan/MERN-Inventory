import React, { useState } from "react";
import "./resetPassword.style.scss";
import { resetPasswors } from "../../services/authService";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const initialState = {
  password1: "",
  password2: "",
};

const ResetPassword = () => {
  const [formData, setFormData] = useState(initialState);
  const { password, password2 } = formData;

  const { resetToken } = useParams();

  const handleInputCHange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.error("Passwords do not match");
    }

    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      password,
      password2,
    };

    try {
      const data = await resetPasswors(userData, resetToken);
      toast.success(data.message);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="resetpassword_container">
      <div className="form">
        <div className="form__header">RESET PASSWORD</div>
        <div className="form__body">
          <form onSubmit={reset}>
            <input
              type="password"
              name="password"
              placeholder="New Password"
              className="form__input"
              value={password}
              onChange={handleInputCHange}
            />

            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              className="form__input"
              value={password2}
              onChange={handleInputCHange}
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

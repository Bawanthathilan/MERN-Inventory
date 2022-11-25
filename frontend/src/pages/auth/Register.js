import React, { useState } from "react";
import { toast } from "react-toastify";
import "./register.style.scss";
import { validateEmail, registerUser } from "../../services/authService";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const handleInputCHange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    console.log(name, email, password, password2);

    if (!name || !email || !password || !password2) {
      return toast.error("Please fill all fields");
    }

    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }

    if (!validateEmail(email)) {
      return toast.error("Invalid email");
    }

    const userData = {
      name,
      email,
      password,
    };

    setIsLoading(true);
    try {
      const data = await registerUser(userData);
      console.log(data);
      setIsLoading(false);
      setFormData(initialState);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <div className="register_container">
      <div className="form">
        <div className="form__header">REGISTER</div>
        <div className="form__body">
          <form onSubmit={register}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form__input"
              value={name}
              onChange={handleInputCHange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form__input"
              value={email}
              onChange={handleInputCHange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
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

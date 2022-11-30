import React, { useState } from "react";
import "./login.style.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validateEmail, loginUser } from "../../services/authService";
import { SET_NAME, SET_LOGIN } from "../../redux/features/auth/authSlice";
import Loader from "../../components/Loader/Loader";
const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const handleInputCHange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    console.log(FormData);
    if (!email || !password) {
      return toast.error("Please fill all fields");
    }
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }
    if (!validateEmail(email)) {
      return toast.error("Invalid email");
    }
    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/dashboard");
      setIsLoading(false);
      setFormData(initialState);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <div className="login_container">
      {isLoading && <Loader />}
      <div className="form">
        <div className="form__header">LOGIN</div>
        <div className="form__body">
          <form onSubmit={login}>
            <input
              type="email"
              placeholder="Email"
              className="form__input"
              name="email"
              value={email}
              onChange={handleInputCHange}
            />
            <input
              type="password"
              placeholder="Password"
              className="form__input"
              name="password"
              value={password}
              onChange={handleInputCHange}
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

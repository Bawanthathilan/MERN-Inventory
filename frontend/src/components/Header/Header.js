import React from "react";
import "./header.style.scss";
import { logoutUser } from "../../services/authService";
import { useDispatch } from "react-redux";
import { SET_NAME } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_NAME(false));
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="name">
        <h1> Welcome , My Name</h1>
      </div>

      <div className="logout_btn" onClick={logout}>
        <h1>Logout</h1>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./header.style.scss";
import { logoutUser } from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOGIN, selectName } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName);

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="name">
        <h1> Welcome , {name}</h1>
      </div>

      <div className="logout_btn" onClick={logout}>
        <h1>Logout</h1>
      </div>
    </div>
  );
};

export default Header;

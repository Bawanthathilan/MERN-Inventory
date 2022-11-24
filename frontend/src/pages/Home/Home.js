import React from "react";
import "./home.style.scss";
import Container from "../../components/Container/Container";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import ProductImage from "../../assets/images/productImage.png";

const Home = () => {
  return (
    <div className="home_container">
      <Container>
        <div className="nav_section">
          <div className="nav_section_left">INM</div>
          <div className="nav_section_right">
            <a className="register" href="/register">
              Register
            </a>
            <a className="login" href="/login">
              Login
            </a>
            <a className="dashboard" href="/dashboard">
              Dashboard
            </a>
          </div>
        </div>
        <div className="home_content">
          <div className="left">
            <h1>Inventory Management Solution</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="button_group">
              <button className="button">Learn More</button>
              <a href="%">
                {" "}
                <BsFillArrowRightCircleFill className="ico" />
                How it Work
              </a>
            </div>
          </div>
          <div className="right">
            <div className="image_container">
              <img src={ProductImage} alt="product" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;

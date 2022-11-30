import React from "react";
import { Circles } from "react-loader-spinner";
import ReactDOM from "react-dom";
import "./Loader.style.scss";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <Circles
          height="200"
          width="200"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;

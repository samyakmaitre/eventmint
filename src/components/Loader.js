// Loader.js
import React from "react";
import { RingLoader } from "react-spinners";
import "./Loader.css";

const Loader = ({ loading }) => {
  return (
    <div className="loader-container">
      <RingLoader color="#FF4D4D" size={150} loading={loading} />
    </div>
  );
};

export default Loader;

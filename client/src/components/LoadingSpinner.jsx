import React from "react";
import "../styles/LoadingSpinner.css";

const LoadingSpinner = () => (
  <div style={{ textAlign: "center", margin: "2rem 0" }}>
    <div className="spinner" />
    <p>Loading...</p>
  </div>
);

export default LoadingSpinner;

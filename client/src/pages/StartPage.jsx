import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import "../styles/startPage.css";
import "../index.css";

const StartPage = () => {
  return (
    <div className="start-page">
      <img className="start-page-logo" src={logo} alt="logo" />
      <h1 className="start-page-title">
        APP<span>NAME</span>
      </h1>
      <p className="start-page-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe omnis sed
        rem eos! Soluta nulla sunt corporis. Voluptate necessitatibus earum
        aliquam fuga explicabo! Sit tempore placeat, inventore quae officia
        incidunt.
      </p>
      <Link className="start-page-link" to="/login">
        Log In
      </Link>
    </div>
  );
};

export default StartPage;

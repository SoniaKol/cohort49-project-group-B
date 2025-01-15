import React from "react";
import { Link, useNavigate } from "react-router-dom";

import TEST_ID from "./Nav.testid";
const Nav = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "left", gap: "20px" }}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/order-cart">Order Cart</Link>
        </li>
        <li>
          <Link to="/about-us" data-testid={TEST_ID.linkToAboutUs}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/restaurants" data-testid={TEST_ID.linkToRestaurants}>
            Restaurants
          </Link>
        </li>
      </ul>

      <button onClick={logout}>logout</button>
    </nav>
  );
};

export default Nav;

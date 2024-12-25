import React from "react";
import { Link } from "react-router-dom";

import TEST_ID from "./Nav.testid";
const Nav = () => {
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "left", gap: "20px" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/user">Users</Link>
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
        <li>
          <Link to="/logout" data-testid={TEST_ID.linkToLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

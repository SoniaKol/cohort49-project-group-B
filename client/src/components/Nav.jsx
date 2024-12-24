import React from "react";
import { Link } from "react-router-dom";

import TEST_ID from "./Nav.testid";
const Nav = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "left" }}>
      <Link to="/order-cart">Order Cart</Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">Users</Link>
        </li>
      </ul>
      <Link to={"/about-us"} data-testid={TEST_ID.linkToAboutUs}>
        <li>About Us</li>
      </Link>
      <Link to={"/restaurants"} data-testid={TEST_ID.linkToRestaurants}>
        <li>Restaurants</li>
      </Link>
      <Link to={"/logout"} data-testid={TEST_ID.linkToLogout}>
        <li>Logout</li>
      </Link>
    </nav>
  );
};

export default Nav;

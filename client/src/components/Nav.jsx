import React from "react";
import { Link } from "react-router-dom";

import TEST_ID from "./Nav.testid";

const Nav = () => {
  return (
    <ul>
      <Link to="/" data-testid={TEST_ID.linkToHome}>
        <li>Home</li>
      </Link>
      <Link to="/user" data-testid={TEST_ID.linkToUsers}>
        <li>Users</li>
      </Link>
      <Link to={"/about-us"} data-testid={TEST_ID.linkToAboutUs}>
        <li>About Us</li>
      </Link>
      <Link to={"/restaurants"} data-testid={TEST_ID.linkToRestaurants}>
        <li>Restaurants</li>
      </Link>
      <Link to={"/logout"} data-testid={TEST_ID.linkToLogout}>
        <li>Logout</li>
      </Link>
    </ul>
  );
};

export default Nav;

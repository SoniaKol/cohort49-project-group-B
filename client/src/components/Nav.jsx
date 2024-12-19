import React from "react";
import { Link } from "react-router-dom";

import TEST_ID from "./Nav.testid";

const Nav = () => {
  return (
    <ul>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
          backgroundColor: "#ccc",
        }}
      >
        <Link to="/order-cart">Order Cart</Link>
      </nav>

      <Link to="/" data-testid={TEST_ID.linkToHome}>
        <li>Home</li>
      </Link>
      <Link to="/user" data-testid={TEST_ID.linkToUsers}>
        <li>Users</li>
      </Link>
    </ul>
  );
};

export default Nav;

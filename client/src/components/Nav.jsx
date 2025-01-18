import React from "react";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useNavigate } from "react-router-dom";

import TEST_ID from "./Nav.testid";

const Nav = () => {
  const navigate = useNavigate();

  const orderCard = () => {
    navigate("/order-cart");
  };
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "left", gap: "20px" }}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about-us" data-testid={TEST_ID.linkToAboutUs}>
            Contact Us
          </Link>
        </li>
        <button onClick={orderCard}>Order Cart</button>
        <LogoutBtn />
      </ul>
    </nav>
  );
};

export default Nav;

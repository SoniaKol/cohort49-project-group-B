import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Filters = () => {
  return (
    <>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          padding: 0,
          gap: "1rem",
        }}
      >
        <li>
          <NavLink to="">All</NavLink>
        </li>
        <li>
          <NavLink to="/menu/starters">Starters</NavLink>
        </li>
        <li>
          <NavLink to="/menu/pizzas">Pizzas</NavLink>
        </li>
        <li>
          <NavLink to="/menu/desserts">Desserts</NavLink>
        </li>
        <li>
          <NavLink to="/menu/drinks">Drinks</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Filters;

import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/Filters.css";

const Filters = () => {
  const [, setActiveFilter] = useState("All");

  const filters = ["All", "Starters", "Pizzas", "Desserts", "Drinks"];

  return (
    <>
      <ul className="filters-list">
        {filters.map((filter) => (
          <li key={filter} className="filters-item">
            <NavLink
              to={filter === "All" ? "/menu" : `/menu/${filter.toLowerCase()}`}
              end={filter === "All"}
              className={({ isActive }) =>
                isActive ? "filter-button active" : "filter-button"
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Filters;

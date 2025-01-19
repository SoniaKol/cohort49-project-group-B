import React from "react";
import Filters from "../../components/Filters";
import Nav from "../../components/Nav";
import OrderCardBtn from "../../components/OrderCardBtn";
import "../../styles/menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <Nav />
      <div className="menu-wrap">
        <h1 className="menu-title">Menu</h1>
        <OrderCardBtn />
      </div>

      <Filters />
    </div>
  );
};

export default Menu;

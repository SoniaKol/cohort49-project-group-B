import React from "react";
import { useNavigate } from "react-router-dom";
import OrderCardIcon from "../img/order-card.svg";
import "../styles/orderCardBtn.css";

const OrderCardBtn = () => {
  const navigate = useNavigate();

  const orderCard = () => {
    navigate("/order-cart");
  };

  return (
    <button className="order-card-btn" onClick={orderCard}>
      <img src={OrderCardIcon} alt="bag" className="order-card-icon" />
    </button>
  );
};

export default OrderCardBtn;

import React from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem";

const OrderCart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "20px",
      }}
    >
      <h1>Order Cart</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ width: "60%" }}>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onRemove={removeFromCart} />
          ))}
        </div>
        <div style={{ width: "30%", marginLeft: "20px" }}>
          <h2>Summary</h2>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Total:</strong>
            <strong>${totalAmount}</strong>
          </div>
          <button style={{ marginTop: "20px", padding: "10px 20px" }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;

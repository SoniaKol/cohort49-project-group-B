import React from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem";
import PizzaData from "../../data/PizzaData";

const OrderCart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

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

      {/* Pizza Selection Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Available Pizzas</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {PizzaData.map((pizza) => (
            <div
              key={pizza.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
                textAlign: "center",
                width: "200px",
              }}
            >
              <img
                src={pizza.photo}
                alt={pizza.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h4>{pizza.name}</h4>
              <p>€{pizza.price}</p>
              <button
                onClick={() => addToCart(pizza)}
                style={{
                  marginRight: "10px",
                  padding: "5px 10px",
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                }}
              >
                Add
              </button>
              <button
                onClick={() => removeFromCart(pizza.id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary Section */}
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
                <span>€{item.price}</span>
              </li>
            ))}
          </ul>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Total:</strong>
            <strong>€{totalAmount}</strong>
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

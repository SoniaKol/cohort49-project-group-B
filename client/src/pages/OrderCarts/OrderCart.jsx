import React, { useEffect, useState } from "react";
import CartItem from "../../components/CartItem";
import { useCart } from "../../context/CartContext";
import Nav from "../../components/Nav";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const OrderCart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [pizzaData, setPizzaData] = useState([]);
  const navigate = useNavigate();

  // Fetch pizza data from an API or database
  useEffect(() => {
    const fetchPizzaData = async () => {
      try {
        const response = await fetch("/api/pizzas");
        const data = await response.json();
        setPizzaData(data);
      } catch (error) {
        toast.error("Failed to fetch pizza data");
      }
    };

    fetchPizzaData();
  }, []);

  const totalAmount = parseFloat(
    cartItems.reduce((total, item) => total + item.price, 0).toFixed(2),
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Please add items to cart first");
      return;
    }
    navigate("/checkout");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "20px",
      }}
    >
      <Nav />
      <h1>Order Cart</h1>

      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          {pizzaData.map((pizza) => (
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
          {cartItems.map((item, index) => (
            <CartItem
              key={item.id || `cart-item-${index}`}
              item={item}
              onRemove={removeFromCart}
            />
          ))}
        </div>
        <div style={{ width: "30%", marginLeft: "20px" }}>
          <h2>Summary</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={item.id || `summary-${index}`}
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
          <button
            onClick={handleCheckout}
            style={{ marginTop: "20px", padding: "10px 20px" }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;

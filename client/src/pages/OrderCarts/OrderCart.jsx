import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CartItem from "../../components/CartItem";
import Nav from "../../components/Nav";
import { useCart } from "../../context/CartContext";

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
    } else {
      navigate("/order-tracking");
    }
  };

  return (
    <div>
      <Nav />
      <h1>Order Cart</h1>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <h2>Total: ${totalAmount}</h2>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default OrderCart;

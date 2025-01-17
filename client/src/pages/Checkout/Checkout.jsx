import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cartItems } = useCart();
  const [address, setAddress] = useState("");
  const [paymentMethod] = useState("Cash");  // Fixed payment method for now

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!address) {
      toast.error("Please provide your address");
      return;
    }

    // Here you would handle the submission, e.g., save order, show confirmation, etc.
    toast.success("Order submitted successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">Shipping Address:</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          />
        </div>

        <div>
          <h3>Order Summary</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{item.name}</span>
                <span>€{item.price}</span>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
            <span>Total:</span>
            <span>€{totalAmount}</span>
          </div>
        </div>

        <div>
          <h3>Payment Method</h3>
          <p>{paymentMethod}</p>
        </div>

        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "green", color: "white" }}>
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;

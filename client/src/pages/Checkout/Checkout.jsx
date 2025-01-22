import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartContext";
//add navigate tracking page inside checkout

const Checkout = () => {
  const navigate = useNavigate();

  const { cartItems } = useCart();
  const [address, setAddress] = useState("");
  const [paymentMethod] = useState("Cash"); // Fixed payment method for now

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleSubmit = async (event) => {
    navigate("/order-tracking");

    event.preventDefault();
    if (!address) {
      toast.error("Please provide your address");
      return;
    }

    // prepare the order data
    const orderData = {
      cartItems,
      totalAmount,
      address,
      paymentMethod,
      restaurant_id: "exampleRestaurantId", // Replace with actual restaurant ID
    };

    try {
      // Make API call to submit the order
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }

      toast.success("Order submitted successfully!");
      // Optionally, clear the cart, navigate to an order confirmation page, etc.
    } catch (error) {
      toast.error("Error submitting the order. Please try again.");
    }
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
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <div>
                  <strong>{item.name}</strong> {/* Display item name */}
                  <br />
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {item.description || "No description available"}
                  </span>
                </div>
                <span>€{item.price.toFixed(2)}</span> {/* Display item price */}
              </li>
            ))}
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            <span>Total:</span>
            <span>€{totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <div>
          <h3>Payment Method</h3>
          <p>{paymentMethod}</p>
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
          }}
          onClick={handleSubmit}
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;

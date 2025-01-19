import React, { useEffect, useState } from "react";
import "./OrderTracking.css"; // CSS dosyasını import ediyoruz

const OrderTracking = () => {
  const [counter, setCounter] = useState(25 * 60); // 25 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="order-tracking-container">
      <p>this page need to bind it checkout page</p>
      <p>Your order is being prepared. Estimated delivery time:</p>
      <h2>{formatTime(counter)}</h2>
      <div className="pizza-animation">
        <span role="img" aria-label="pizza">
          🍕
        </span>
      </div>
      <p>Your pizza is on the way!</p>
    </div>
  );
};

export default OrderTracking;

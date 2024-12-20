//  creating context to managing cart globally in the app
import PropTypes from "prop-types";
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => setCartItems((prevItems) => [...prevItems, item]);

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1);
        return updatedItems;
      }
      return prevItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);

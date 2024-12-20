import React from "react";
import PropTypes from "prop-types";

const CartItem = ({ item, onRemove }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <img
        src={item.photo}
        alt={item.name}
        style={{ width: "80px", height: "80px", objectFit: "cover" }}
      />
      <div style={{ flex: 1, marginLeft: "10px" }}>
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <button
          onClick={() => onRemove(item.id)}
          style={{
            padding: "5px 10px",
            color: "white",
            backgroundColor: "red",
            border: "none",
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;

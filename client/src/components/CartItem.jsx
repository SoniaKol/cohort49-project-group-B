import PropTypes from "prop-types";
import React from "react";

const CartItem = ({ item, onRemove }) => {
  const images = [];
  const importAll = (requireContext) =>
    requireContext.keys().forEach((key) => {
      images.push({
        src: requireContext(key),
        imgName: key,
      });
    });

  importAll(require.context("../img", false, /\.jpg$/));

  const img = images.find((img) => img.imgName === `./${item.imgId}.jpg`);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      {img && (
        <img
          src={img.src.default}
          alt={item.food_name}
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
        />
      )}
      <div style={{ flex: 1, marginLeft: "10px" }}>
        <h4>{item.food_name}</h4>
        <p>€{item.price.toFixed(2)}</p>
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
    food_name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    imgId: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;

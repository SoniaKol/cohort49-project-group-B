import React from "react";
import PropTypes from "prop-types";

const Item = ({ item }) => {
  const { food_name, price, description, imgId } = item;
  return (
    <div>
      <img
        src={`/img/${imgId}.jpg`}
        alt={food_name}
        style={{
          width: "100px",
        }}
      />
      <h3>{food_name}</h3>
      <p>{description}</p>
      <h4>{price} €</h4>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    food_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imgId: PropTypes.number.isRequired,
  }).isRequired,
};

export default Item;

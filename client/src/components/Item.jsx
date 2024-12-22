import React from "react";
import PropTypes from "prop-types";
import img12 from "../img/12.jpg";

const Item = ({ item }) => {
  const { food_name, price, description } = item;
  // const img = "img" + imgId;
  return (
    <div>
      <img
        src={img12}
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

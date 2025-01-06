import React from "react";
import PropTypes from "prop-types";

const Item = ({ item }) => {
  const { food_name, price, description, imgId } = item;

  const images = [];
  const importAll = (requireContext) =>
    requireContext.keys().forEach((key) => {
      images.push({
        src: requireContext(key),
        imgName: key,
      });
    });

  importAll(require.context("../img", false, /\.jpg$/));

  const img = images.find((img) => img.imgName === `./${imgId}.jpg`);

  return (
    <div>
      <img
        src={img.src.default}
        alt={food_name}
        style={{
          width: "100px",
          height: "100px",
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

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import { useCart } from "../context/CartContext";
import useFetch from "../hooks/useFetch";
import { Outlet, useParams } from "react-router-dom";

const MenuList = () => {
  const filter = useParams().filter;

  const [items, setItems] = useState(null);
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    `/menu/${filter ? filter : ""}`,
    (response) => {
      setItems(response.result);
    },
  );

  useEffect(() => {
    performFetch();

    return () => {
      cancelFetch();
    };
  }, [filter]);

  const { addToCart } = useCart();

  let content = null;

  if (isLoading) {
    content = <div>loading...</div>;
  } else if (error != null) {
    content = <div>Error: {error.toString()}</div>;
  } else {
    content = (
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyleType: "none",
          padding: 0,
          listStyle: "none",
          gap: "1rem",
        }}
      >
        {items &&
          items.map((item) => {
            return (
              <li
                key={item._id}
                data-elementid={item._id}
                style={{
                  width: "30%",
                }}
              >
                <Item item={item} />
                <button onClick={() => addToCart(item)}>Add to cart</button>
              </li>
            );
          })}
      </ul>
    );
  }

  return (
    <>
      {content}
      <Outlet />
    </>
  );
};

MenuList.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default MenuList;

import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Item from "../../components/Item";
import { useCart } from "../../context/CartContext";

const Menu = () => {
  const [items, setItems] = useState(null);
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/menu",
    (response) => {
      setItems(response.result);
    },
  );

  useEffect(() => {
    performFetch();

    return cancelFetch;
  }, []);

  const { addToCart } = useCart();

  let content = null;

  if (isLoading) {
    content = <div>loading...</div>;
  } else if (error != null) {
    content = <div>Error: {error.toString()}</div>;
  } else {
    content = (
      <>
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
      </>
    );
  }

  return (
    <div>
      <h1>Menu</h1>
      {content}
    </div>
  );
};

export default Menu;

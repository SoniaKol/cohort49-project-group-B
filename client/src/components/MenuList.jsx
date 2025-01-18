import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import { useCart } from "../context/CartContext";
import useFetch from "../hooks/useFetch";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const MenuList = () => {
  const { filter } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 6;
  const [totalPages, setTotalPages] = useState(0);

  const [items, setItems] = useState(null);
  const { isLoading, error, performFetch } = useFetch(
    `/menu/${filter ? filter : ""}?page=${page}&limit=${limit}`,
    (response) => {
      setItems(response.result);
      setTotalPages(response.totalPages);
    },
  );

  const [loadingDelay, setLoadingDelay] = useState(false);

  useEffect(() => {
    setLoadingDelay(true);
    const timer = setTimeout(() => {
      performFetch();
      setLoadingDelay(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [filter, page, limit]);

  const { addToCart } = useCart();

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage, limit });
  };

  let content = null;

  if (loadingDelay || isLoading) {
    content = <LoadingSpinner />;
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
      <div>
        <button
          disabled={isLoading || page <= 1}
          onClick={() => handlePageChange(page - 1)}
        >
          {isLoading && page > 1 ? <LoadingSpinner /> : "Previous"}
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={isLoading || page >= totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          {isLoading && page < totalPages ? <LoadingSpinner /> : "Next"}
        </button>
      </div>
      <Outlet />
    </>
  );
};

MenuList.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default MenuList;

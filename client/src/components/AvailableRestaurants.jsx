import React, { useState } from "react";

// Import the pizza data
import restaurantData from "../../../server/src/data/restaurant.js"; // If the file is in the same folder
// Example list of pizzas with names and image URLs

function AvailableRestaurants() {
  // Pagination states
  const itemsPerPage = 5; // Number of pizzas per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(restaurantData.length / itemsPerPage);

  // Slice pizza list to get the current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPizzas = restaurantData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>Available Pizza Restaurants</h2>

      {/* Display the current pizzas with images */}
      <ul>
        {currentPizzas.map((pizza, index) => (
          <li key={index}>
            <img src={pizza.imageUrl} alt={pizza.name} />
            {pizza.name}
          </li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>

        {/* Display page numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            style={{
              fontWeight: currentPage === index + 1 ? "bold" : "normal",
            }}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default AvailableRestaurants;

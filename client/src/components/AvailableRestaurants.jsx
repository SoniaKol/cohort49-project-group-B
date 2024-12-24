import React, { useState } from "react";

// Example list of pizzas with names and image URLs
const pizzaList = [
  { name: "Pepperoni Pizza", imageUrl: "/images/pepperoni-pizza.jpg" },
  { name: "Margherita Pizza", imageUrl: "/images/margherita-pizza.jpg" },
  { name: "Hawaiian Pizza", imageUrl: "/images/hawaiian-pizza.jpg" },
  { name: "BBQ Chicken Pizza", imageUrl: "/images/bbq-chicken-pizza.jpg" },
  { name: "Vegetarian Pizza", imageUrl: "/images/vegetarian-pizza.jpg" },
  { name: "Mushroom Pizza", imageUrl: "/images/mushroom-pizza.jpg" },
  { name: "Four Cheese Pizza", imageUrl: "/images/four-cheese-pizza.jpg" },
  { name: "Meat Lovers Pizza", imageUrl: "/images/meat-lovers-pizza.jpg" },
  {
    name: "Buffalo Chicken Pizza",
    imageUrl: "/images/buffalo-chicken-pizza.jpg",
  },
  { name: "Supreme Pizza", imageUrl: "/images/supreme-pizza.jpg" },
  { name: "Greek Pizza", imageUrl: "/images/greek-pizza.jpg" },
  { name: "Pesto Pizza", imageUrl: "/images/pesto-pizza.jpg" },
  { name: "Seafood Pizza", imageUrl: "/images/seafood-pizza.jpg" },
  {
    name: "Chicken Alfredo Pizza",
    imageUrl: "/images/chicken-alfredo-pizza.jpg",
  },
  { name: "Cheeseburger Pizza", imageUrl: "/images/cheeseburger-pizza.jpg" },
  { name: "Spicy Italian Pizza", imageUrl: "/images/spicy-italian-pizza.jpg" },
  { name: "Pineapple Pizza", imageUrl: "/images/pineapple-pizza.jpg" },
  {
    name: "Cheese Stuffed Crust Pizza",
    imageUrl: "/images/cheese-stuffed-crust-pizza.jpg",
  },
  {
    name: "Philly Cheesesteak Pizza",
    imageUrl: "/images/philly-cheesesteak-pizza.jpg",
  },
  {
    name: "Spinach and Feta Pizza",
    imageUrl: "/images/spinach-feta-pizza.jpg",
  },
];

function AvailableRestaurants() {
  // Pagination states
  const itemsPerPage = 5; // Number of pizzas per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(pizzaList.length / itemsPerPage);

  // Slice pizza list to get the current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPizzas = pizzaList.slice(indexOfFirstItem, indexOfLastItem);

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

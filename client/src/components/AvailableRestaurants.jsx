import axios from "axios";
import React, { useEffect, useState } from "react";

function AvailableRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Number of restaurants per page
  const itemsPerPage = 5;

  // Fetch restaurants from the backend API
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/restaurants",
        );
        setRestaurants(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []); // Only runs once when the component mounts

  // Pagination logic
  const totalPages = Math.ceil(restaurants.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRestaurants = restaurants.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Available Restaurants</h2>

      {/* Display the current restaurants */}
      <ul>
        {currentRestaurants.map((restaurant) => (
          <li key={restaurant._id}>
            <img src={restaurant.imageUrl} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
            <p>{restaurant.phone}</p>
            <p>{restaurant.cuisine}</p>
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

import React from "react";

import AvailableRestaurants from "../../components/AvailableRestaurants";
import SearchBar from "../../components/SearchBar";
import { SearchProvider } from "../../context/SearchContext"; // import your context provider
import TEST_ID from "./Home.testid";
const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <h1>This is the homepage</h1>

      <AvailableRestaurants />
      <SearchProvider>
        <SearchBar />
      </SearchProvider>
    </div>
  );
};

export default Home;

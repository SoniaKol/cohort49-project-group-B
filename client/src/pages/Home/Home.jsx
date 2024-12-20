import React from "react";

import AvailableRestaurants from "../../components/AvailableRestaurants";
import TEST_ID from "./Home.testid";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <h1>This is the homepage</h1>
      <AvailableRestaurants />
      <SearchBar />
    </div>
  );
};

export default Home;

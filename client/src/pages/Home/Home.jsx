import React from "react";

import AvailableRestaurants from "../../components/AvailableRestaurants";
import TEST_ID from "./Home.testid";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <h1>This is the homepage</h1>
      <AvailableRestaurants />
    </div>
  );
};

export default Home;

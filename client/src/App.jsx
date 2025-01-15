import React from "react";
import { Route, Routes } from "react-router-dom";
// import LogIn from "./components/LogIn"; // Corrected import path
import MenuList from "./components/MenuList";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup"; // Corrected import path
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import OrderCart from "./pages/OrderCarts/OrderCart";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />}>
          <Route path="" element={<MenuList />} />
          <Route path=":filter" element={<MenuList />} />
        </Route>
        <Route path="/about-us" element={<h1>About us</h1>} />
        <Route path="/restaurants" element={<h1>Restaurants</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />
        <Route path="/order-cart" element={<OrderCart />} />
      </Routes>
    </div>
  );
};

export default App;

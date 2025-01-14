import React from "react";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn"; // Corrected import path
import MenuList from "./components/MenuList";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp"; // Corrected import path
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import OrderCart from "./pages/OrderCarts/OrderCart";

const App = () => {
  return (
    <>
      <Nav />
      <SignUp />
      <LogIn />
      <Routes>
        {/* <Route path="/" element={<SignIn />} /> */}
        <Route path="/Home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu" element={<Menu />}>
          <Route path="" element={<MenuList />} />
          <Route path=":filter" element={<MenuList />} />
        </Route>
        <Route path="/about-us" element={<h1>About us</h1>} />
        <Route path="/restaurants" element={<h1>Restaurants</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />
        <Route path="/order-cart" element={<OrderCart />} />
      </Routes>
    </>
  );
};

export default App;

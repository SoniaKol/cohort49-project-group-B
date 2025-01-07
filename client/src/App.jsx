import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import OrderCart from "./pages/OrderCarts/OrderCart";
import CreateUser from "./pages/User/CreateUser";
import UserList from "./pages/User/UserList";
import Menu from "./pages/Menu/Menu";
import SignIn from "./pages/SignIn/SignIn";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path= "/dashboard" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/about-us" element={<h1>About Us</h1>} />
        <Route path="/restaurants" element={<h1>Restaurants</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />
        <Route path="/order-cart" element={<OrderCart />} />
      </Routes>
    </>
  );
};

export default App;
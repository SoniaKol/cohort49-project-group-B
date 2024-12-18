import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import CreateUser from "./pages/User/CreateUser";
import UserList from "./pages/User/UserList";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/about-us" element={<h1>About Us</h1>} />
        <Route path="/restaurants" element={<h1>Restaurants</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />
      </Routes>
    </>
  );
};

export default App;

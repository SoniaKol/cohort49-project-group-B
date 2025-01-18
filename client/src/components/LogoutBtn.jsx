import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/logout.css";

const LogoutBtn = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <button onClick={logout} className="logout-btn">
      logout
    </button>
  );
};

export default LogoutBtn;

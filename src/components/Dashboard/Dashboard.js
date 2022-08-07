import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };
  return (
    <div>
      <div>Dashboard</div>
      <button onClick={handleSignOut}> Sign Out</button>
    </div>
  );
}

export default Dashboard;

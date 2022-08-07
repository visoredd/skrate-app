import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/");
    } else {
      navigate("/dashboard");
    }
    setLoading(false);
  }, [localStorage]);

  if (loading) return <></>;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

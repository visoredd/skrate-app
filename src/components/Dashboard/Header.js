import React from "react";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };
  return (
    <div className="flex justify-end p-8 gap-5">
      <div className="">
        <button
          onClick={handleSignOut}
          className="px-4 py-1 bg-blue-500 rounded text-white"
        >
          Sign Out
        </button>
      </div>
      <div className="flex justify-center items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
          alt="profile"
          className="h-7 w-7 rounded-full"
        />
        <div>{props.title || "Profile"}</div>
      </div>
    </div>
  );
}

export default Header;

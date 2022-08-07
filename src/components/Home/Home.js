import React, { useState, useEffect } from "react";
import { signInWithGoogle } from "../../services/firebase";
import logo from "../../Skrate-logo.png";
import vector from "../../Vector.png";
import login from "../../Login.png";

function Home({ loggedIn }) {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" className="w-32 h-24" />
      </div>
      <div className="mt-48 flex ml-20 flex-col w-72">
        <p className="w-32 font-medium text-base">Welcome back to skrate!!</p>
        <button
          className="px-2 py-1 mt-4 bg-blue-700 rounded text-white"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
      </div>
      <div>
        <img
          src={vector}
          alt="background"
          className="fixed right-0 top-0 w-2/5"
        />
        <img
          src={login}
          alt="bottom"
          className="absolute w-2/5 bottom-0 right-2"
        />
      </div>
    </div>
  );
}

export default Home;

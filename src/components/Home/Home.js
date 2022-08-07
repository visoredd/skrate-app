import React, { useState, useEffect } from "react";
import { signInWithGoogle } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

function Home({ loggedIn }) {
  return (
    <div>
      <div>Home</div>
      <button className="p-3" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Home;

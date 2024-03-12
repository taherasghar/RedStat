import React from "react";
import { useNavigate } from "react-router-dom";
import UserStatus from "../features/userStatus/UserStatus.js";
const Home = () => {
  const navigate = useNavigate();
  return (
      <div className="welcome-div">
        <h1>Welcome to Home Page!</h1>
        <img
          src="https://s.turbifycdn.com/aah/christmastreehill/cat-welcome-sign-hope-you-like-cats-8in-12.jpg"
          alt="cats welcoming you!"
        />
        <button
          onClick={() => {
            navigate("/products");
          }}
        >
          Check out latest products!
        </button>{" "}
      </div>
  );
};

export default Home;

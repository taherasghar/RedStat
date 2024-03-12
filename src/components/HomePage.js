import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Home from "./Home";
import UserStatus from "../features/userStatus/UserStatus";
const HomePage = () => {
  const location = useLocation();
  return (
    <div>
      <nav>
        <ul>
          <UserStatus />
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
      {location.pathname === "/" ? <Home /> : null}
      <Outlet />
    </div>
  );
};

export default HomePage;
